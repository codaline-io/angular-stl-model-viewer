angular-stl-model-viewer
==

This is an angular component to render stl-models with THREE.js.

Installation
==
- `yarn add angular-stl-model-viewer`
- `npm install angular-stl-model-viewer`

Usage
==
- import `StlModelViewerModule` to your app module
- use stl-model-viewer component in your html `<stl-model-viewer [stlModels]="['example.stl']"></stl-model-viewer>`


Example
=

The working basic example can be found in our [live demo][live-demo].

Configuration
==
## Input Properties
| Attr         | Type                   | Default                                                                          | Details                                            |
| ------------ | ---------------------- | -------------------------------------------------------------------------------- |--------------------------------------------------- |
| stlModels     | string[]                 | -                                                                                | List of stl model paths                                  |
| hasControls  | boolean                | true                                                                             | If true, the user can interact with the stl-models  |
| camera       | THREE.Camera           | THREE.PerspectiveCamera( 35, WindowInnerWidth / WindowInnerHeight, 1, 15 )       | The projection mode used for rendering the scene   |
| cameraTarget | THREE.Vector3          | THREE.Vector3( 0, 0, 0 )                                                         | The orientation point for the camera               |
| light        | THREE.Light            | THREE.PointLight( 0xffffff )                                                     | Illuminates the scene                              |
| material     | THREE.MeshMaterialType | THREE.MeshPhongMaterial({ color: 0xc4c4c4, shininess: 100, specular: 0x111111 }) | Casts more precisely the possible materials assignable to a [                                                                                                                                [Mesh]] object |
| scene        | THREE.Scene            | THREE.Scene()                                                                    | Scenes allow you to set up what and where is to be rendered by                                                                                                                               three.js. This is where you place objects, lights and cameras |
| renderer     | THREE.WebGLRenderer    | THREE.WebGLRenderer({ antialias: true })                                         | Displays your beautifully crafted scenes using WebGL |
| controls     | THREE.OrbitControls    | THREE.OrbitControls                                                              | Allow the camera to orbit around a target          |
| meshOptions  | MeshOptions[]            | []                                                                               | customize mesh options per stl-model                                                  |

## Output Events
| Attr       | Details                                  |
| ---------- | ---------------------------------------- |
| rendered   |  Emitted when the stl-model is rendered. |


## MeshOptionsType

| Attr          | Type                 | Default                         | Details                                 |
| ------------- | -------------------- | ------------------------------- | --------------------------------------- |
| castShadow    | boolean              | true                            | Gets rendered into shadow map |
| position      | THREE.Vector3        | THREE.Vector3( 0, 0, 0 )          | Object's local position |
| receiveShadow | boolean              | true                            | Material gets baked in shadow receiving |
| scale         | THREE.Vector3        | THREE.Vector3( 0.03, 0.03, 0.03 ) | Object's local scale |
| up            | THREE.Vector3        | -                               | Up direction |
| userData      | {[key: string]: any} | -                               | An object that can be used to store custom data about the Object3d. It should not hold references to functions as                                                                            these will not be cloned |
| visible       | boolean              | -                               | Object gets rendered if true |

Contributing
===
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using `yarn lint` and `yarn test`.


[live-demo]: https://codaline-io.github.io/angular-stl-model-viewer
