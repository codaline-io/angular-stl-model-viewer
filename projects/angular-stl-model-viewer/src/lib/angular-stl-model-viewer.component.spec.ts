/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, OnInit, ViewChild } from '@angular/core'
import { ComponentFixture, TestBed } from '@angular/core/testing'

import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest'
import { StlModelViewerComponent } from './angular-stl-model-viewer.component'
import { StlModelViewerModule } from './angular-stl-model-viewer.module'

@Component({
  imports: [StlModelViewerModule],
  template: '<stl-model-viewer [stlModels]="models" (rendered)="isRendered = true"></stl-model-viewer>'
})
class TestComponent implements OnInit {
  @ViewChild(StlModelViewerComponent, {
    static: true
  }) stlModelViewerCmp: StlModelViewerComponent | null = null

  isRendered = false
  stlModelViewerCmpElement: HTMLCanvasElement | null = null
  models = ['test.stl']
  constructor(private eleRef: ElementRef) {}

  ngOnInit() {
    this.stlModelViewerCmpElement = this.eleRef.nativeElement.querySelector('stl-model-viewer')
  }
}

describe('StlModelViewerComponent', () => {
  let hostFixture: ComponentFixture<TestComponent>
  let component: StlModelViewerComponent

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
      imports: [
        StlModelViewerComponent
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents()
  })

  beforeEach(async () => {
    hostFixture = TestBed.createComponent(TestComponent)
    component = hostFixture.componentInstance.stlModelViewerCmp as StlModelViewerComponent

    // Mocks stlLoader.load to work without existing stl model
    vi.spyOn(component.stlLoader, 'load').mockImplementation((_path: string, cb: any) => {
      cb(new THREE.BufferGeometry())
    })
    vi.spyOn(component, 'setSizes')

    hostFixture.detectChanges()
    await hostFixture.whenStable()
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  describe('sets default values', () => {
    beforeEach(() => {
      // Runs first change detection that triggers ngOnInit
      hostFixture.detectChanges()
    })

    test('sets default renderer options', () => {
      expect(component.renderer.getPixelRatio()).toBe(window.devicePixelRatio)
      expect(component.renderer.shadowMap.enabled).toBe(true)
    })

    test('sets default light position', () => {
      expect(component.light.position).toEqual(new THREE.Vector3(1, 1, 2))
    })

    test('sets default camera position', () => {
      expect(component.camera.position.x).toEqual(3)
      expect(component.camera.position.y).toEqual(3)
      expect(Math.floor(component.camera.position.z)).toEqual(3)
    })

    test('sets default scene background', () => {
      expect(component.scene.background).toEqual(new THREE.Color(0xffffff))
    })
  })

  describe('#ngOnInit', () => {
    test('logs error if webgl is not available', () => {
      component.hasWebGL = false
      vi.spyOn(console, 'error')
      vi.spyOn(component, 'createMesh')

      expect(component.ngOnInit()).toBeUndefined()
      expect(console.error).toHaveBeenCalled()
      expect(component.createMesh).not.toHaveBeenCalled()
    })

    test('adds light to camera', async () => {
      vi.spyOn(component.camera, 'add')

      await component.ngOnInit()
      hostFixture.detectChanges()

      expect(component.camera.add).toHaveBeenCalledWith(component.light)
    })

    test('adds camera to scene', async () => {
      vi.spyOn(component.scene, 'add')

      await component.ngOnInit()
      hostFixture.detectChanges()

      expect(component.scene.add).toHaveBeenCalledWith(component.camera)
    })

    test('sets window event listener', async () => {
      vi.spyOn(window, 'addEventListener')

      await component.ngOnInit()
      hostFixture.detectChanges()

      expect(window.addEventListener).toHaveBeenCalled()
      expect(window.addEventListener).toHaveBeenCalledWith('resize', component.onWindowResize, false)
    })

    test('sets initial sizes and camera aspec ratio', async () => {
      await component.ngOnInit()
      await hostFixture.whenStable()
      hostFixture.detectChanges()

      expect(component.setSizes).toHaveBeenCalled()
    })

    test('adds default controls and sets control options', async () => {
      await component.ngOnInit()
      hostFixture.detectChanges()

      if (component.controls) {
        expect(component.controls.enableZoom).toBe(true)
        expect(component.controls.minDistance).toBe(1)
        expect(component.controls.maxDistance).toBe(7)
        expect(component.controls.hasEventListener('change', component.render)).toBeTruthy()
      }
      else {
        expect(component.controls).not.toBeNull()
      }
    })

    test('calls createMesh', async () => {
      const fakeMesh = new THREE.Mesh()
      vi.spyOn(component, 'createMesh').mockResolvedValue(fakeMesh)
      vi.spyOn(component.scene, 'add')
      vi.spyOn(component, 'render')

      await component.ngOnInit()
      await hostFixture.whenStable()

      expect(component.createMesh).toHaveBeenCalledWith(component.stlModels[0], undefined)
      const el = hostFixture.componentInstance.stlModelViewerCmpElement as HTMLCanvasElement
      expect(!!(el.querySelector('canvas'))).toBe(true)
      expect(component.render).toHaveBeenCalled()
      expect(component.isRendered).toBe(true)
      expect(hostFixture.componentInstance.isRendered).toBe(true)
    })
  })

  describe('#ngOnDestroy', () => {
    test('remove window event listener', () => {
      vi.spyOn(window, 'removeEventListener')

      component.ngOnDestroy()
      hostFixture.detectChanges()

      expect(window.removeEventListener).toHaveBeenCalled()
      expect(window.removeEventListener).toHaveBeenCalledWith('resize', component.onWindowResize, false)
    })

    test('cleans up controls', () => {
      component.controls = new OrbitControls(component.camera, component.renderer.domElement)

      vi.spyOn(component.controls, 'dispose')
      vi.spyOn(component.controls, 'removeEventListener')

      component.ngOnDestroy()
      hostFixture.detectChanges()

      expect(component.controls.dispose).toHaveBeenCalled()
      expect(component.controls.removeEventListener).toHaveBeenCalled()
    })

    test('removes scene children', () => {
      vi.spyOn(component.scene, 'remove')
      const object3d = new THREE.Object3D()
      component.scene.add(object3d)

      component.ngOnDestroy()
      hostFixture.detectChanges()

      expect(component.scene.remove).toHaveBeenCalled()
      expect(component.scene.remove).toHaveBeenCalledWith(object3d)
    })
  })

  describe('#createMesh', () => {
    test('sets correct options', async () => {
      component.meshOptions = [{
        castShadow: false,
        position: new THREE.Vector3(1, 1, 1),
        receiveShadow: false,
        scale: new THREE.Vector3(2, 2, 2),
        up: new THREE.Vector3(3, 3, 3)
      }]

      const mesh = await component.createMesh('test.stl', component.meshOptions[0])
      hostFixture.detectChanges()

      expect(mesh.position).toEqual(new THREE.Vector3(1, 1, 1))
      expect(mesh.scale).toEqual(new THREE.Vector3(2, 2, 2))
      expect(mesh.up).toEqual(new THREE.Vector3(3, 3, 3))
      expect(mesh.receiveShadow).toBe(false)
      expect(mesh.castShadow).toBe(false)
    })

    test('sets default options', async () => {
      const mesh = await component.createMesh('test.stl')
      hostFixture.detectChanges()

      expect(mesh.position).toEqual(new THREE.Vector3(0, 0, 0))
      expect(mesh.scale).toEqual(new THREE.Vector3(0.03, 0.03, 0.03))
      expect(mesh.receiveShadow).toBe(true)
      expect(mesh.castShadow).toBe(true)
    })
  })

  describe('#render', () => {
    test('rerenders scene with camera', () => {
      vi.spyOn(component.renderer, 'render')

      component.render()
      hostFixture.detectChanges()

      expect(component.renderer.render).toHaveBeenCalledWith(component.scene, component.camera)
    })
  })

  describe('#onWindowResize', () => {
    test('calls set sizes and render', () => {
      vi.spyOn(component, 'render')

      component.onWindowResize()
      hostFixture.detectChanges()

      expect(component.render).toHaveBeenCalled()
      expect(component.setSizes).toHaveBeenCalled()
    })
  })
})
