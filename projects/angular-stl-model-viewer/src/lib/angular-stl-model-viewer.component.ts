/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  NgZone,
  OnDestroy,
  OnInit,
  Output
} from '@angular/core'

import * as THREE from 'three'

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader.js'

import { Vector3 } from 'three'

export interface MeshOptions {
  castShadow?: boolean
  position?: THREE.Vector3
  receiveShadow?: boolean
  scale?: THREE.Vector3
  up?: THREE.Vector3
  userData?: Record<string, any>
  visible?: boolean
}

const defaultMeshOptions = {
  castShadow: true,
  position: new THREE.Vector3(0, 0, 0),
  receiveShadow: true,
  scale: new THREE.Vector3(0.03, 0.03, 0.03)
}

const isWebGLAvailable = () => {
  try {
    const canvas = document.createElement('canvas')
    return !!(
      window.WebGLRenderingContext
      && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    )
  }
  catch {
    return false
  }
}

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'stl-model-viewer',
  styles: [
    `
:host {
  width: 100%;
  height: 100%;
  display: block;
}
  `
  ],
  template: ''
})
export class StlModelViewerComponent implements OnInit, OnDestroy {
  @Input() stlModels: string[] = []
  @Input() stlModelFiles: string[] = []
  @Input() hasControls = true
  @Input() camera: THREE.PerspectiveCamera = new THREE.PerspectiveCamera(
    35,
    window.innerWidth / window.innerHeight,
    1,
    15
  )

  @Input() cameraTarget: THREE.Vector3 = new THREE.Vector3(0, 0, 0)
  @Input() light: THREE.Light = new THREE.PointLight(0xffffff, 80)
  @Input() material: THREE.Material = new THREE.MeshPhongMaterial({
    color: 0x999999,
    shininess: 400,
    specular: 0x222222
  })

  @Input() scene: THREE.Scene = new THREE.Scene()
  @Input() renderer: THREE.WebGLRenderer = new THREE.WebGLRenderer({
    antialias: true
  })

  @Input() controls: any | null = null
  @Input() meshOptions: MeshOptions[] = []
  @Input() centered = true

  @Output() rendered = new EventEmitter<void>()

  hasWebGL = isWebGLAvailable()
  meshGroup = new THREE.Object3D()
  isRendered = false
  showStlModel = true
  stlLoader = new STLLoader()
  middle = new THREE.Vector3()

  constructor(
    private cdr: ChangeDetectorRef,
    private eleRef: ElementRef,
    private ngZone: NgZone
  ) {
    this.cdr.detach()
    // default light position
    this.light.position.set(1, 1, 2)

    // default camera position
    this.camera.position.set(3, 3, 3)

    // default scene background
    this.scene.background = new THREE.Color(0xffffff)

    // default renderer options
    this.renderer.setPixelRatio(window.devicePixelRatio)
    this.renderer.shadowMap.enabled = true
  }

  ngOnInit() {
    if (!this.hasWebGL) {
      console.error(
        'stl-model-viewer: Seems like your system does not support webgl.'
      )
      return
    }

    this.ngZone.runOutsideAngular(() => {
      this.init()
    })
  }

  ngOnDestroy() {
    window.removeEventListener('resize', this.onWindowResize, false)

    this.meshGroup.children.forEach(child => this.meshGroup.remove(child))
    this.scene.children.forEach(child => this.scene.remove(child))
    this.camera.remove(this.light)

    if (this.material) {
      this.material.dispose()
    }

    if (this.controls) {
      this.controls.removeEventListener('change', this.render)
      this.controls.dispose()
    }

    if (this.eleRef && this.eleRef.nativeElement.children.length > 1) {
      this.eleRef.nativeElement.removeChild(this.renderer.domElement)
    }
    this.renderer.renderLists.dispose()
    this.renderer.domElement.remove()

    this.renderer.dispose()
  }

  async createMesh(
    path: string,
    meshOptions: MeshOptions = {},
    parse = false
  ): Promise<THREE.Mesh> {
    let geometry: THREE.BufferGeometry = null
    if (parse) {
      geometry = this.stlLoader.parse(path)
    }
    else {
      geometry = await this.stlLoader.loadAsync(path)
    }
    this.material.shininess = 100
    const mesh = new THREE.Mesh(geometry, this.material)

    if (this.centered) {
      geometry.computeBoundingBox()
      geometry.boundingBox.getCenter(this.middle)
      mesh.geometry.applyMatrix4(
        new THREE.Matrix4().makeTranslation(
          -this.middle.x,
          -this.middle.y,
          -this.middle.z
        )
      )
    }

    const vectorOptions = ['position', 'scale', 'up']
    const options = Object.assign({}, defaultMeshOptions, meshOptions)

    Object.getOwnPropertyNames(options).forEach((option) => {
      if (vectorOptions.indexOf(option) > -1) {
        const vector = options[option] as Vector3
        const meshVectorOption = mesh[option] as Vector3
        meshVectorOption.set(vector.x, vector.y, vector.z)
      }
      else {
        mesh[option] = options[option]
      }
    })

    return mesh
  }

  render = () => {
    this.renderer.render(this.scene, this.camera)
  }

  setSizes() {
    const width = this.eleRef.nativeElement.offsetWidth
    const height = this.eleRef.nativeElement.offsetHeight

    this.camera.aspect = width / height
    this.camera.updateProjectionMatrix()

    this.renderer.setSize(width, height)
  }

  onWindowResize = () => {
    this.setSizes()
    this.render()
  }

  private async init() {
    this.camera.add(this.light)
    this.scene.add(this.camera)

    // use default controls
    if (this.hasControls) {
      if (!this.controls) {
        this.controls = new OrbitControls(
          this.camera,
          this.renderer.domElement
        )
        this.controls.enableZoom = true
        this.controls.minDistance = 1
        this.controls.maxDistance = 7
      }
      this.controls.addEventListener('change', this.render)
    }

    window.addEventListener('resize', this.onWindowResize, false)
    let meshCreations: Promise<THREE.Mesh>[] = []
    if (this.stlModels.length > 0) {
      meshCreations = this.stlModels.map((modelPath, index) =>
        this.createMesh(modelPath, this.meshOptions[index])
      )
    }
    else {
      meshCreations = this.stlModelFiles.map((modelFile, index) =>
        this.createMesh(modelFile, this.meshOptions[index], true)
      )
    }
    const meshes: THREE.Object3D[] = await Promise.all(meshCreations)

    meshes.map(mesh => this.meshGroup.add(mesh))

    this.scene.add(this.meshGroup)
    this.eleRef.nativeElement.appendChild(this.renderer.domElement)
    this.setSizes()
    this.render()
    this.ngZone.run(() => {
      this.isRendered = true
      this.rendered.emit()
      this.cdr.detectChanges()
    })
  }
}
