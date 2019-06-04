import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewChild, ElementRef } from '@angular/core'
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing'

import * as THREE from 'three'
import * as OrbitControls from 'three-orbitcontrols'

import { StlModelViewerComponent } from './stl-model-viewer.component'
import { StlModelViewerModule } from './stl-model-viewer.module'

@Component({
  template: '<stl-model-viewer stlModel="test.stl" (rendered)="isRendered = true"></stl-model-viewer>'
})
class TestComponent {
  @ViewChild(StlModelViewerComponent, {
    static: true
  }) stlModelViewerCmp: StlModelViewerComponent | null = null
  isRendered = false
  stlModelViewerCmpElement: HTMLCanvasElement | null = null

  constructor(private eleRef: ElementRef) {}

  ngOnInit() {
    this.stlModelViewerCmpElement = this.eleRef.nativeElement.querySelector('stl-model-viewer')
  }
}

describe('StlModelViewerComponent', () => {
  let hostFixture: ComponentFixture<TestComponent>
  let component: StlModelViewerComponent

  beforeEach(() => {

    TestBed.configureTestingModule({
      declarations: [TestComponent],
      imports: [
        StlModelViewerModule
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents()
  })

  beforeEach(() => {
    hostFixture = TestBed.createComponent(TestComponent)
    component = hostFixture.componentInstance.stlModelViewerCmp as StlModelViewerComponent

    // Mocks stlLoader.load to work without existing stl model
    spyOn(component.stlLoader, 'load').and.callFake((_path: string, cb: any) => {
      cb(new THREE.BufferGeometry())
    })
  })

  describe('sets default values', () => {
    beforeEach(() => {
      // Runs first change detection that triggers ngOnInit
      hostFixture.detectChanges()
    })

    it('sets default renderer options', () => {
      expect(component.renderer.getPixelRatio()).toBe(window.devicePixelRatio)
      expect(component.renderer.gammaInput).toBe(true)
      expect(component.renderer.gammaOutput).toBe(true)
      expect(component.renderer.shadowMap.enabled).toBe(true)
    })

    it('sets default light position', () => {
      expect(component.light.position).toEqual(new THREE.Vector3(1, 1, 2))
    })

    it('sets default camera position', () => {
      expect(component.camera.position.x).toEqual(3)
      expect(component.camera.position.y).toEqual(3)
      expect(Math.floor(component.camera.position.z)).toEqual(3)
    })

    it('sets default scene background', () => {
      expect(component.scene.background).toEqual(new THREE.Color(0xffffff))
    })
  })

  describe('#ngOnInit', () => {
    it('logs error if webgl is not available', () => {
      component.hasWebGL = false
      spyOn(console, 'error').and.callThrough()
      spyOn(component, 'createMesh')

      expect(component.ngOnInit()).toBeUndefined()
      expect(console.error).toHaveBeenCalled()
      expect(component.createMesh).not.toHaveBeenCalled()
    })

    it('adds light to camera', () => {
      spyOn(component.camera, 'add')

      component.ngOnInit()
      hostFixture.detectChanges()

      expect(component.camera.add).toHaveBeenCalledWith(component.light)
    })

    it('adds camera to scene', () => {
      spyOn(component.scene, 'add')

      component.ngOnInit()
      hostFixture.detectChanges()

      expect(component.scene.add).toHaveBeenCalledWith(component.camera)
    })

    it('sets window event listener', () => {
      spyOn(window, 'addEventListener')

      component.ngOnInit()
      hostFixture.detectChanges()

      expect(window.addEventListener).toHaveBeenCalled()
      expect(window.addEventListener).toHaveBeenCalledWith('resize', component.onWindowResize, false)
    })

    it('sets initial sizes and camera aspec ratio', () => {
      spyOn(component, 'setSizes')

      component.ngOnInit()
      hostFixture.detectChanges()

      expect(component.setSizes).toHaveBeenCalled()
    })

    it('adds default controls and sets control options', () => {
      component.ngOnInit()
      hostFixture.detectChanges()

      if (component.controls) {
        expect(component.controls.enableZoom).toBe(true)
        expect(component.controls.minDistance).toBe(1)
        expect(component.controls.maxDistance).toBe(7)
        expect(component.controls.hasEventListener('change', component.render)).toBeTruthy()
      } else {
        expect(component.controls).not.toBeNull()
      }
    })

    it('calls createMesh', fakeAsync(() => {
      const fakeMesh = new THREE.Mesh()
      spyOn(component, 'createMesh').and.callFake(() => Promise.resolve(fakeMesh))
      spyOn(component.scene, 'add').and.callThrough()
      spyOn(component, 'render').and.callThrough()

      component.ngOnInit()
      hostFixture.detectChanges()
      tick()


      expect(component.createMesh).toHaveBeenCalledWith(component.stlModel)

      const el = hostFixture.componentInstance.stlModelViewerCmpElement as HTMLCanvasElement
      expect(!!(el.querySelector('canvas'))).toBe(true)

      expect(component.render).toHaveBeenCalled()

      hostFixture.detectChanges()
      tick()

      expect(component.isRendered).toBe(true)
      expect(hostFixture.componentInstance.isRendered).toBe(true)
    }))
  })

  describe('#ngOnDestroy', () => {
    it('remove window event listener', () => {
      spyOn(window, 'removeEventListener')

      component.ngOnDestroy()
      hostFixture.detectChanges()

      expect(window.removeEventListener).toHaveBeenCalled()
      expect(window.removeEventListener).toHaveBeenCalledWith('resize', component.onWindowResize, false)
    })

    it('cleans up controls', () => {
      component.controls = new OrbitControls(component.camera, component.renderer.domElement)

      spyOn(component.controls, 'dispose').and.callThrough()
      spyOn(component.controls, 'removeEventListener').and.callThrough()

      component.ngOnDestroy()
      hostFixture.detectChanges()

      expect(component.controls.dispose).toHaveBeenCalled()
      expect(component.controls.removeEventListener).toHaveBeenCalled()
      expect(component.controls.hasEventListener('change', component.render)).toBe(false)
    })

    it('removes scene children', () => {
      spyOn(component.scene, 'remove').and.callThrough()
      const object3d = new THREE.Object3D()
      component.scene.add(object3d)

      component.ngOnDestroy()
      hostFixture.detectChanges()

      expect(component.scene.remove).toHaveBeenCalled()
      expect(component.scene.remove).toHaveBeenCalledWith(object3d)
    })
  })

  describe('#createMesh', () => {
    it('sets correct options', async () => {
      component.meshOptions = {
        castShadow: false,
        position: new THREE.Vector3(1, 1, 1),
        receiveShadow: false,
        scale: new THREE.Vector3(2, 2, 2),
        up: new THREE.Vector3(3, 3, 3)
      }

      const mesh = await component.createMesh('test.stl')
      hostFixture.detectChanges()

      expect(mesh.position).toEqual(new THREE.Vector3(1, 1, 1))
      expect(mesh.scale).toEqual(new THREE.Vector3(2, 2, 2))
      expect(mesh.up).toEqual(new THREE.Vector3(3, 3, 3))
      expect(mesh.receiveShadow).toBe(false)
      expect(mesh.castShadow).toBe(false)
    })

    it('sets default options', async () => {
      const mesh = await component.createMesh('test.stl')
      hostFixture.detectChanges()

      expect(mesh.position).toEqual(new THREE.Vector3(0, 0, 0))
      expect(mesh.scale).toEqual(new THREE.Vector3(0.03, 0.03, 0.03))
      expect(mesh.receiveShadow).toBe(true)
      expect(mesh.castShadow).toBe(true)
    })
  })

  describe('#render', () => {
    it('rerenders scene with camera', () => {
      spyOn(component.renderer, 'render')

      component.render()
      hostFixture.detectChanges()

      expect(component.renderer.render).toHaveBeenCalledWith(component.scene, component.camera)
    })
  })

  describe('#onWindowResize', () => {
    it('calls set sizes and render', () => {
      spyOn(component, 'setSizes').and.callThrough()
      spyOn(component, 'render')

      component.onWindowResize()
      hostFixture.detectChanges()

      expect(component.render).toHaveBeenCalled()
      expect(component.setSizes).toHaveBeenCalled()
    })
  })
})
