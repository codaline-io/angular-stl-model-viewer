import { __awaiter, __generator, __decorate } from 'tslib';
import { EventEmitter, ChangeDetectorRef, ElementRef, NgZone, Input, Output, Component, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { Vector3, PerspectiveCamera, PointLight, MeshPhongMaterial, Scene, WebGLRenderer, Object3D, Color, Mesh } from 'three';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

var defaultMeshOptions = {
    castShadow: true,
    position: new Vector3(0, 0, 0),
    receiveShadow: true,
    scale: new Vector3(0.03, 0.03, 0.03)
};
function isWebGLAvailable() {
    try {
        var canvas = document.createElement('canvas');
        return !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
    }
    catch (e) {
        return false;
    }
}
var StlModelViewerComponent = /** @class */ (function () {
    function StlModelViewerComponent(cdr, eleRef, ngZone) {
        var _this = this;
        this.cdr = cdr;
        this.eleRef = eleRef;
        this.ngZone = ngZone;
        this.stlModels = [];
        this.hasControls = true;
        this.camera = new PerspectiveCamera(35, window.innerWidth / window.innerHeight, 1, 15);
        this.cameraTarget = new Vector3(0, 0, 0);
        this.light = new PointLight(0xffffff);
        this.material = new MeshPhongMaterial({ color: 0xc4c4c4, shininess: 100, specular: 0x111111 });
        this.scene = new Scene();
        this.renderer = new WebGLRenderer({ antialias: true });
        this.controls = null;
        this.meshOptions = [];
        this.rendered = new EventEmitter();
        this.hasWebGL = isWebGLAvailable();
        this.meshGroup = new Object3D();
        this.isRendered = false;
        this.showStlModel = true;
        this.stlLoader = new STLLoader();
        this.render = function () {
            _this.renderer.render(_this.scene, _this.camera);
        };
        this.onWindowResize = function () {
            _this.setSizes();
            _this.render();
        };
        this.cdr.detach();
        // default light position
        this.light.position.set(1, 1, 2);
        // default camera position
        this.camera.position.set(3, 3, 3);
        // default scene background
        this.scene.background = new Color(0xffffff);
        // default renderer options
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.shadowMap.enabled = true;
    }
    StlModelViewerComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.hasWebGL) {
            console.error('stl-model-viewer: Seems like your system does not support webgl.');
            return;
        }
        this.ngZone.runOutsideAngular(function () {
            _this.init();
        });
    };
    StlModelViewerComponent.prototype.ngOnDestroy = function () {
        var _this = this;
        window.removeEventListener('resize', this.onWindowResize, false);
        this.meshGroup.remove();
        if (this.renderer) {
            this.renderer.renderLists.dispose();
            this.renderer.dispose();
        }
        if (this.camera) {
            this.camera.remove();
        }
        if (this.light) {
            this.light.remove();
        }
        if (this.material) {
            this.material.dispose();
        }
        if (this.controls) {
            this.controls.removeEventListener('change', this.render);
            this.controls.dispose();
        }
        if (this.scene) {
            this.scene.children.forEach(function (child) {
                _this.scene.remove(child);
            });
            this.scene.dispose();
        }
    };
    StlModelViewerComponent.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var meshCreations, meshes;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.camera.add(this.light);
                        this.scene.add(this.camera);
                        // use default controls
                        if (this.hasControls && !this.controls) {
                            this.controls = new OrbitControls(this.camera, this.renderer.domElement);
                            this.controls.enableZoom = true;
                            this.controls.minDistance = 1;
                            this.controls.maxDistance = 7;
                            this.controls.addEventListener('change', this.render);
                        }
                        window.addEventListener('resize', this.onWindowResize, false);
                        meshCreations = this.stlModels.map(function (modelPath, index) { return _this.createMesh(modelPath, _this.meshOptions[index]); });
                        return [4 /*yield*/, Promise.all(meshCreations)];
                    case 1:
                        meshes = _a.sent();
                        meshes.map(function (mesh) { return _this.meshGroup.add(mesh); });
                        this.scene.add(this.meshGroup);
                        this.eleRef.nativeElement.appendChild(this.renderer.domElement);
                        this.setSizes();
                        this.render();
                        this.ngZone.run(function () {
                            _this.isRendered = true;
                            _this.rendered.emit();
                            _this.cdr.detectChanges();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    StlModelViewerComponent.prototype.createMesh = function (path, meshOptions) {
        if (meshOptions === void 0) { meshOptions = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var geometry, mesh, vectorOptions, options;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.stlLoader.loadAsync(path)];
                    case 1:
                        geometry = _a.sent();
                        mesh = new Mesh(geometry, this.material);
                        vectorOptions = ['position', 'scale', 'up'];
                        options = Object.assign({}, defaultMeshOptions, meshOptions);
                        Object.getOwnPropertyNames(options).forEach(function (option) {
                            if (vectorOptions.indexOf(option) > -1) {
                                var vector = options[option];
                                var meshVectorOption = mesh[option];
                                meshVectorOption.set(vector.x, vector.y, vector.z);
                            }
                            else {
                                mesh[option] = options[option];
                            }
                        });
                        return [2 /*return*/, mesh];
                }
            });
        });
    };
    StlModelViewerComponent.prototype.setSizes = function () {
        var width = this.eleRef.nativeElement.offsetWidth;
        var height = this.eleRef.nativeElement.offsetHeight;
        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(width, height);
    };
    StlModelViewerComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    __decorate([
        Input()
    ], StlModelViewerComponent.prototype, "stlModels", void 0);
    __decorate([
        Input()
    ], StlModelViewerComponent.prototype, "hasControls", void 0);
    __decorate([
        Input()
    ], StlModelViewerComponent.prototype, "camera", void 0);
    __decorate([
        Input()
    ], StlModelViewerComponent.prototype, "cameraTarget", void 0);
    __decorate([
        Input()
    ], StlModelViewerComponent.prototype, "light", void 0);
    __decorate([
        Input()
    ], StlModelViewerComponent.prototype, "material", void 0);
    __decorate([
        Input()
    ], StlModelViewerComponent.prototype, "scene", void 0);
    __decorate([
        Input()
    ], StlModelViewerComponent.prototype, "renderer", void 0);
    __decorate([
        Input()
    ], StlModelViewerComponent.prototype, "controls", void 0);
    __decorate([
        Input()
    ], StlModelViewerComponent.prototype, "meshOptions", void 0);
    __decorate([
        Output()
    ], StlModelViewerComponent.prototype, "rendered", void 0);
    StlModelViewerComponent = __decorate([
        Component({
            changeDetection: ChangeDetectionStrategy.OnPush,
            selector: 'stl-model-viewer',
            template: '',
            styles: ["\n:host {\n  width: 100%;\n  height: 100%;\n  display: block;\n}\n  "]
        })
    ], StlModelViewerComponent);
    return StlModelViewerComponent;
}());

var StlModelViewerModule = /** @class */ (function () {
    function StlModelViewerModule() {
    }
    StlModelViewerModule = __decorate([
        NgModule({
            declarations: [StlModelViewerComponent],
            exports: [StlModelViewerComponent],
            imports: []
        })
    ], StlModelViewerModule);
    return StlModelViewerModule;
}());

/*
 * Public API Surface of angular-stl-model-viewer
 */

/**
 * Generated bundle index. Do not edit.
 */

export { StlModelViewerComponent, StlModelViewerModule };
//# sourceMappingURL=angular-stl-model-viewer.js.map
