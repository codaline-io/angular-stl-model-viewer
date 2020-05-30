import { __awaiter, __decorate } from 'tslib';
import { EventEmitter, ChangeDetectorRef, ElementRef, NgZone, Input, Output, Component, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { Vector3, PerspectiveCamera, PointLight, MeshPhongMaterial, Scene, WebGLRenderer, Object3D, Color, Mesh } from 'three';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import * as ɵngcc0 from '@angular/core';
const defaultMeshOptions = {
    castShadow: true,
    position: new Vector3(0, 0, 0),
    receiveShadow: true,
    scale: new Vector3(0.03, 0.03, 0.03)
};
function isWebGLAvailable() {
    try {
        const canvas = document.createElement('canvas');
        return !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
    }
    catch (e) {
        return false;
    }
}
let StlModelViewerComponent = class StlModelViewerComponent {
    constructor(cdr, eleRef, ngZone) {
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
        this.render = () => {
            this.renderer.render(this.scene, this.camera);
        };
        this.onWindowResize = () => {
            this.setSizes();
            this.render();
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
    ngOnInit() {
        if (!this.hasWebGL) {
            console.error('stl-model-viewer: Seems like your system does not support webgl.');
            return;
        }
        this.ngZone.runOutsideAngular(() => {
            this.init();
        });
    }
    ngOnDestroy() {
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
            this.scene.children.forEach((child) => {
                this.scene.remove(child);
            });
            this.scene.dispose();
        }
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
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
            const meshCreations = this.stlModels.map((modelPath, index) => this.createMesh(modelPath, this.meshOptions[index]));
            const meshes = yield Promise.all(meshCreations);
            meshes.map((mesh) => this.meshGroup.add(mesh));
            this.scene.add(this.meshGroup);
            this.eleRef.nativeElement.appendChild(this.renderer.domElement);
            this.setSizes();
            this.render();
            this.ngZone.run(() => {
                this.isRendered = true;
                this.rendered.emit();
                this.cdr.detectChanges();
            });
        });
    }
    createMesh(path, meshOptions = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const geometry = yield this.stlLoader.loadAsync(path);
            const mesh = new Mesh(geometry, this.material);
            const vectorOptions = ['position', 'scale', 'up'];
            const options = Object.assign({}, defaultMeshOptions, meshOptions);
            Object.getOwnPropertyNames(options).forEach((option) => {
                if (vectorOptions.indexOf(option) > -1) {
                    const vector = options[option];
                    const meshVectorOption = mesh[option];
                    meshVectorOption.set(vector.x, vector.y, vector.z);
                }
                else {
                    mesh[option] = options[option];
                }
            });
            return mesh;
        });
    }
    setSizes() {
        const width = this.eleRef.nativeElement.offsetWidth;
        const height = this.eleRef.nativeElement.offsetHeight;
        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(width, height);
    }
};
StlModelViewerComponent.ɵfac = function StlModelViewerComponent_Factory(t) { return new (t || StlModelViewerComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone)); };
StlModelViewerComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: StlModelViewerComponent, selectors: [["stl-model-viewer"]], inputs: { stlModels: "stlModels", hasControls: "hasControls", camera: "camera", cameraTarget: "cameraTarget", light: "light", material: "material", scene: "scene", renderer: "renderer", controls: "controls", meshOptions: "meshOptions" }, outputs: { rendered: "rendered" }, decls: 0, vars: 0, template: function StlModelViewerComponent_Template(rf, ctx) { }, styles: ["[_nghost-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: block;\n}"], changeDetection: 0 });
StlModelViewerComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
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

let StlModelViewerModule = class StlModelViewerModule {
};
StlModelViewerModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: StlModelViewerModule });
StlModelViewerModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function StlModelViewerModule_Factory(t) { return new (t || StlModelViewerModule)(); }, imports: [[]] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(StlModelViewerComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                selector: 'stl-model-viewer',
                template: '',
                styles: [`
:host {
  width: 100%;
  height: 100%;
  display: block;
}
  `]
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc0.ElementRef }, { type: ɵngcc0.NgZone }]; }, { stlModels: [{
            type: Input
        }], hasControls: [{
            type: Input
        }], camera: [{
            type: Input
        }], cameraTarget: [{
            type: Input
        }], light: [{
            type: Input
        }], material: [{
            type: Input
        }], scene: [{
            type: Input
        }], renderer: [{
            type: Input
        }], controls: [{
            type: Input
        }], meshOptions: [{
            type: Input
        }], rendered: [{
            type: Output
        }] }); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(StlModelViewerModule, { declarations: [StlModelViewerComponent], exports: [StlModelViewerComponent] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(StlModelViewerModule, [{
        type: NgModule,
        args: [{
                declarations: [StlModelViewerComponent],
                exports: [StlModelViewerComponent],
                imports: []
            }]
    }], null, null); })();

/*
 * Public API Surface of angular-stl-model-viewer
 */

/**
 * Generated bundle index. Do not edit.
 */

export { StlModelViewerComponent, StlModelViewerModule };

//# sourceMappingURL=angular-stl-model-viewer.js.map