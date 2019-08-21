import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  NgZone,
  OnInit,
  Output,
  Renderer2
} from '@angular/core'

import * as THREE from 'three'

import { STLLoader } from 'three/examples/jsm/loaders/STLLoader'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

import { Vector3 } from 'three'

export interface MeshOptions {
  castShadow?: boolean
  position?: THREE.Vector3
  receiveShadow?: boolean
  scale?: THREE.Vector3
  up?: THREE.Vector3
  userData?: {[key: string]: any}
  visible?: boolean
}

const defaultMeshOptions = {
  castShadow: true,
  position: new THREE.Vector3(0, 0, 0),
  receiveShadow: true,
  scale: new THREE.Vector3(0.03, 0.03, 0.03)
}

function isWebGLAvailable () {
  try {
    const canvas = document.createElement('canvas')
    return !! (window['WebGLRenderingContext'] && (canvas.getContext('webgl') || canvas.getContext( 'experimental-webgl')))
  } catch (e) {
    return false
  }
}

@Component({
  selector: 'stl-model-viewer',
  template: '<div></div>'
})
export class StlModelViewerComponent implements OnInit {
  @Input() stlModel: string = ''
  @Input('hasControls') hasControls: boolean = true

  @Input('camera') camera: THREE.PerspectiveCamera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 1, 15)
  @Input('cameraTarget') cameraTarget: THREE.Vector3 = new THREE.Vector3( 0, 0, 0 )
  @Input('light') light: THREE.Light = new THREE.PointLight( 0xffffff )
  @Input('material') material: THREE.Material = new THREE.MeshPhongMaterial({ color: 0xc4c4c4, shininess: 100, specular: 0x111111 })
  @Input('scene') scene: THREE.Scene = new THREE.Scene()
  @Input('renderer') renderer: THREE.WebGLRenderer = new THREE.WebGLRenderer({ antialias: true })
  @Input('controls') controls: any | null = null
  @Input('meshOptions') meshOptions: MeshOptions = {}

  @Output() rendered = new EventEmitter<void>()

  hasWebGL = isWebGLAvailable()
  isRendered = false
  showStlModel: boolean = true
  stlLoader = new STLLoader()

  constructor(
    private eleRef: ElementRef,
    private ngZone: NgZone,
    private ngRenderer: Renderer2
  ) {
    // default light position
    this.light.position.set(1, 1, 2)

    // default camera position
    this.camera.position.set(3, 3, 3)

    // default scene background
    this.scene.background = new THREE.Color(0xffffff)

    // default renderer options
    this.renderer.setPixelRatio(window.devicePixelRatio)
    this.renderer.gammaInput = true
    this.renderer.gammaOutput = true
    this.renderer.shadowMap.enabled = true
  }

  ngOnInit() {
    if (!this.hasWebGL) {
      console.error('stl-model-viewer: Seems like your system does not support webgl.')
      return
    }

    this.ngZone.runOutsideAngular(() => {
      this.init()
    })
  }

  ngOnDestroy() {
    window.removeEventListener('resize', this.onWindowResize, false)
    if (this.controls) {
      this.controls.removeEventListener('change', this.render)
      this.controls.dispose()
    }
    if (this.scene) {
      this.scene.children.forEach((child) => {
        this.scene.remove(child)
      })
    }
  }

  private init() {
    this.camera.add(this.light)
    this.scene.add(this.camera)

    // use default controls
    if (this.hasControls && !this.controls) {
      this.controls = new OrbitControls(this.camera, this.renderer.domElement)
      this.controls.enableZoom = true
      this.controls.minDistance = 1
      this.controls.maxDistance = 7

      this.controls.addEventListener('change', this.render)
    }

    this.setSizes()

    window.addEventListener('resize', this.onWindowResize, false)

    this.createMesh(this.stlModel)
      .then((mesh: THREE.Object3D) => this.scene.add(mesh))
      .then(() => {
        this.ngRenderer.appendChild(this.eleRef.nativeElement, this.renderer.domElement)
        this.render()
      })
      .then(() => this.ngZone.run(() => {
        this.isRendered = true
        this.rendered.emit()
      }))
  }

  createMesh(path: string): Promise<THREE.Mesh> {
    return new Promise((resolve) => {
      this.stlLoader.load(path, (geometry: THREE.BufferGeometry) => {
        const mesh = new THREE.Mesh(geometry, this.material)

        const vectorOptions = ['position', 'scale', 'up']
        const options = Object.assign({}, defaultMeshOptions, this.meshOptions)

        Object.getOwnPropertyNames(options).forEach((option) => {
          if (vectorOptions.indexOf(option) > -1) {
            const vector = options[option] as Vector3
            const meshVectorOption = mesh[option] as Vector3
            meshVectorOption.set(vector.x, vector.y, vector.z)
          } else {
            mesh[option] = options[option]
          }
        })

        return resolve(mesh)
      })
    })
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
}
