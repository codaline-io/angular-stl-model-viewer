import { __awaiter, __decorate, __generator } from "tslib";
import { Component, ElementRef, EventEmitter, Input, NgZone, OnDestroy, OnInit, Output, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import * as THREE from 'three';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
var defaultMeshOptions = {
    castShadow: true,
    position: new THREE.Vector3(0, 0, 0),
    receiveShadow: true,
    scale: new THREE.Vector3(0.03, 0.03, 0.03)
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
        this.camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 1, 15);
        this.cameraTarget = new THREE.Vector3(0, 0, 0);
        this.light = new THREE.PointLight(0xffffff);
        this.material = new THREE.MeshPhongMaterial({ color: 0xc4c4c4, shininess: 100, specular: 0x111111 });
        this.scene = new THREE.Scene();
        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.controls = null;
        this.meshOptions = [];
        this.rendered = new EventEmitter();
        this.hasWebGL = isWebGLAvailable();
        this.meshGroup = new THREE.Object3D();
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
        this.scene.background = new THREE.Color(0xffffff);
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
                        mesh = new THREE.Mesh(geometry, this.material);
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
export { StlModelViewerComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1zdGwtbW9kZWwtdmlld2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItc3RsLW1vZGVsLXZpZXdlci8iLCJzb3VyY2VzIjpbImxpYi9hbmd1bGFyLXN0bC1tb2RlbC12aWV3ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFDTixTQUFTLEVBQ1QsTUFBTSxFQUNOLE1BQU0sRUFDTix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFBO0FBRXRCLE9BQU8sS0FBSyxLQUFLLE1BQU0sT0FBTyxDQUFBO0FBRTlCLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQTtBQUNoRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkNBQTJDLENBQUE7QUFjekUsSUFBTSxrQkFBa0IsR0FBRztJQUN6QixVQUFVLEVBQUUsSUFBSTtJQUNoQixRQUFRLEVBQUUsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3BDLGFBQWEsRUFBRSxJQUFJO0lBQ25CLEtBQUssRUFBRSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUM7Q0FDM0MsQ0FBQTtBQUVELFNBQVMsZ0JBQWdCO0lBQ3ZCLElBQUk7UUFDRixJQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQy9DLE9BQU8sQ0FBQyxDQUFFLENBQUMsTUFBTSxDQUFDLHFCQUFxQixJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxNQUFNLENBQUMsVUFBVSxDQUFFLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxDQUFBO0tBQ3JIO0lBQUMsT0FBTyxDQUFD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QUMvRztRQUFSLEtBQUssRUFBRTswREFBdUM7SUFDdEM7UUFBUixLQUFLLEVBQUU7NkRBQTZFO0lBQzVFO1FBQVIsS0FBSyxFQUFFOzZEQUE0QjtJQUMzQjtRQUFSLEtBQUssRUFBRTtnRUFBZ0M7SUFFOUI7UUFBVCxNQUFNLEVBQUU7NkRBQW9DO0lBWmxDLHVCQUF1QjtRQVpuQyxTQUFTLENBQUM7WUFDVCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtZQUMvQyxRQUFRLEVBQUUsa0JBQWtCO1lBUTVCLFFBQVEsRUFBRSxFQUFFO3FCQVBILHNFQU1SO1NBRUYsQ0FBQztPQUNXLHVCQUF1QixDQTJKbkM7SUFBRCw4QkFBQztDQUFBLEFBM0pELElBMkpDO1NBM0pZLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcblxuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnXG5cbmltcG9ydCB7IFNUTExvYWRlciB9IGZyb20gJ3RocmVlL2V4YW1wbGVzL2pzbS9sb2FkZXJzL1NUTExvYWRlcidcbmltcG9ydCB7IE9yYml0Q29udHJvbHMgfSBmcm9tICd0aHJlZS9leGFtcGxlcy9qc20vY29udHJvbHMvT3JiaXRDb250cm9scydcblxuaW1wb3J0IHsgVmVjdG9yMyB9IGZyb20gJ3RocmVlJ1xuXG5leHBvcnQgaW50ZXJmYWNlIE1lc2hPcHRpb25zIHtcbiAgY2FzdFNoYWRvdz86IGJvb2xlYW5cbiAgcG9zaXRpb24/OiBUSFJFRS5WZWN0b3IzXG4gIHJlY2VpdmVTaGFkb3c/OiBib29sZWFuXG4gIHNjYWxlPzogVEhSRUUuVmVjdG9yM1xuICB1cD86IFRIUkVFLlZlY3RvcjNcbiAgdXNlckRhdGE/OiB7W2tleTogc3RyaW5nXTogYW55fVxuICB2aXNpYmxlPzogYm9vbGVhblxufVxuXG5jb25zdCBkZWZhdWx0TWVzaE9wdGlvbnMgPSB7XG4gIGNhc3RTaGFkb3c6IHRydWUsXG4gIHBvc2l0aW9uOiBuZXcgVEhSRUUuVmVjdG9yMygwLCAwLCAwKSxcbiAgcmVjZWl2ZVNoYWRvdzogdHJ1ZSxcbiAgc2NhbGU6IG5ldyBUSFJFRS5WZWN0b3IzKDAuMDMsIDAuMDMsIDAuMDMpXG59XG5cbmZ1bmN0aW9uIGlzV2ViR0xBdmFpbGFibGUoKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJylcbiAgICByZXR1cm4gISEgKHdpbmRvdy5XZWJHTFJlbmRlcmluZ0NvbnRleHQgJiYgKGNhbnZhcy5nZXRDb250ZXh0KCd3ZWJnbCcpIHx8IGNhbnZhcy5nZXRDb250ZXh0KCAnZXhwZXJpbWVudGFsLXdlYmdsJykpKVxuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBzZWxlY3RvcjogJ3N0bC1tb2RlbC12aWV3ZXInLFxuICBzdHlsZXM6IFtgXG46aG9zdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuICBgXSxcbiAgdGVtcGxhdGU6ICcnXG59KVxuZXhwb3J0IGNsYXNzIFN0bE1vZGVsVmlld2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSBzdGxNb2RlbHM6IHN0cmluZ1tdID0gW11cbiAgQElucHV0KCkgaGFzQ29udHJvbHMgPSB0cnVlXG4gIEBJbnB1dCgpIGNhbWVyYTogVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoMzUsIHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0LCAxLCAxNSlcbiAgQElucHV0KCkgY2FtZXJhVGFyZ2V0OiBUSFJFRS5WZWN0b3IzID0gbmV3IFRIUkVFLlZlY3RvcjMoIDAsIDAsIDAgKVxuICBASW5wdXQoKSBsaWdodDogVEhSRUUuTGlnaHQgPSBuZXcgVEhSRUUuUG9pbnRMaWdodCggMHhmZmZmZmYgKVxuICBASW5wdXQoKSBtYXRlcmlhbDogVEhSRUUuTWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaFBob25nTWF0ZXJpYWwoeyBjb2xvcjogMHhjNGM0YzQsIHNoaW5pbmVzczogMTAwLCBzcGVjdWxhcjogMHgxMTExMTEgfSlcbiAgQElucHV0KCkgc2NlbmU6IFRIUkVFLlNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKClcbiAgQElucHV0KCkgcmVuZGVyZXI6IFRIUkVFLldlYkdMUmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcih7IGFudGlhbGlhczogdHJ1ZSB9KVxuICBASW5wdXQoKSBjb250cm9sczogYW55IHwgbnVsbCA9IG51bGxcbiAgQElucHV0KCkgbWVzaE9wdGlvbnM6IE1lc2hPcHRpb25zW10gPSBbXVxuXG4gIEBPdXRwdXQoKSByZW5kZXJlZCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKVxuXG4gIGhhc1dlYkdMID0gaXNXZWJHTEF2YWlsYWJsZSgpXG4gIG1lc2hHcm91cCA9IG5ldyBUSFJFRS5PYmplY3QzRCgpXG4gIGlzUmVuZGVyZWQgPSBmYWxzZVxuICBzaG93U3RsTW9kZWwgPSB0cnVlXG4gIHN0bExvYWRlciA9IG5ldyBTVExMb2FkZXIoKVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIGVsZVJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIG5nWm9uZTogTmdab25lXG4gICkge1xuICAgIHRoaXMuY2RyLmRldGFjaCgpXG4gICAgLy8gZGVmYXVsdCBsaWdodCBwb3NpdGlvblxuICAgIHRoaXMubGlnaHQucG9zaXRpb24uc2V0KDEsIDEsIDIpXG5cbiAgICAvLyBkZWZhdWx0IGNhbWVyYSBwb3NpdGlvblxuICAgIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnNldCgzLCAzLCAzKVxuXG4gICAgLy8gZGVmYXVsdCBzY2VuZSBiYWNrZ3JvdW5kXG4gICAgdGhpcy5zY2VuZS5iYWNrZ3JvdW5kID0gbmV3IFRIUkVFLkNvbG9yKDB4ZmZmZmZmKVxuXG4gICAgLy8gZGVmYXVsdCByZW5kZXJlciBvcHRpb25zXG4gICAgdGhpcy5yZW5kZXJlci5zZXRQaXhlbFJhdGlvKHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvKVxuICAgIHRoaXMucmVuZGVyZXIuc2hhZG93TWFwLmVuYWJsZWQgPSB0cnVlXG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAoIXRoaXMuaGFzV2ViR0wpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ3N0bC1tb2RlbC12aWV3ZXI6IFNlZW1zIGxpa2UgeW91ciBzeXN0ZW0gZG9lcyBub3Qgc3VwcG9ydCB3ZWJnbC4nKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgdGhpcy5pbml0KClcbiAgICB9KVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMub25XaW5kb3dSZXNpemUsIGZhbHNlKVxuXG4gICAgdGhpcy5tZXNoR3JvdXAucmVtb3ZlKClcblxuICAgIGlmICh0aGlzLnJlbmRlcmVyKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbmRlckxpc3RzLmRpc3Bvc2UoKVxuICAgICAgdGhpcy5yZW5kZXJlci5kaXNwb3NlKClcbiAgICB9XG5cbiAgICBpZiAodGhpcy5jYW1lcmEpIHtcbiAgICAgIHRoaXMuY2FtZXJhLnJlbW92ZSgpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMubGlnaHQpIHtcbiAgICAgIHRoaXMubGlnaHQucmVtb3ZlKClcbiAgICB9XG5cbiAgICBpZiAodGhpcy5tYXRlcmlhbCkge1xuICAgICAgdGhpcy5tYXRlcmlhbC5kaXNwb3NlKClcbiAgICB9XG5cbiAgICBpZiAodGhpcy5jb250cm9scykge1xuICAgICAgdGhpcy5jb250cm9scy5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLnJlbmRlcilcbiAgICAgIHRoaXMuY29udHJvbHMuZGlzcG9zZSgpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc2NlbmUpIHtcbiAgICAgIHRoaXMuc2NlbmUuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgICAgdGhpcy5zY2VuZS5yZW1vdmUoY2hpbGQpXG4gICAgICB9KVxuICAgICAgdGhpcy5zY2VuZS5kaXNwb3NlKClcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGluaXQoKSB7XG4gICAgdGhpcy5jYW1lcmEuYWRkKHRoaXMubGlnaHQpXG4gICAgdGhpcy5zY2VuZS5hZGQodGhpcy5jYW1lcmEpXG5cbiAgICAvLyB1c2UgZGVmYXVsdCBjb250cm9sc1xuICAgIGlmICh0aGlzLmhhc0NvbnRyb2xzICYmICF0aGlzLmNvbnRyb2xzKSB7XG4gICAgICB0aGlzLmNvbnRyb2xzID0gbmV3IE9yYml0Q29udHJvbHModGhpcy5jYW1lcmEsIHRoaXMucmVuZGVyZXIuZG9tRWxlbWVudClcbiAgICAgIHRoaXMuY29udHJvbHMuZW5hYmxlWm9vbSA9IHRydWVcbiAgICAgIHRoaXMuY29udHJvbHMubWluRGlzdGFuY2UgPSAxXG4gICAgICB0aGlzLmNvbnRyb2xzLm1heERpc3RhbmNlID0gN1xuXG4gICAgICB0aGlzLmNvbnRyb2xzLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMucmVuZGVyKVxuICAgIH1cblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLm9uV2luZG93UmVzaXplLCBmYWxzZSlcblxuICAgIGNvbnN0IG1lc2hDcmVhdGlvbnMgPSB0aGlzLnN0bE1vZGVscy5tYXAoKG1vZGVsUGF0aCwgaW5kZXgpID0+IHRoaXMuY3JlYXRlTWVzaChtb2RlbFBhdGgsIHRoaXMubWVzaE9wdGlvbnNbaW5kZXhdKSlcbiAgICBjb25zdCBtZXNoZXM6IFRIUkVFLk9iamVjdDNEW10gPSBhd2FpdCBQcm9taXNlLmFsbChtZXNoQ3JlYXRpb25zKVxuXG4gICAgbWVzaGVzLm1hcCgobWVzaCkgPT4gdGhpcy5tZXNoR3JvdXAuYWRkKG1lc2gpKVxuICAgIHRoaXMuc2NlbmUuYWRkKHRoaXMubWVzaEdyb3VwKVxuICAgIHRoaXMuZWxlUmVmLm5hdGl2ZUVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5yZW5kZXJlci5kb21FbGVtZW50KVxuICAgIHRoaXMuc2V0U2l6ZXMoKVxuICAgIHRoaXMucmVuZGVyKClcbiAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgdGhpcy5pc1JlbmRlcmVkID0gdHJ1ZVxuICAgICAgdGhpcy5yZW5kZXJlZC5lbWl0KClcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKVxuICAgIH0pXG4gIH1cblxuICBhc3luYyBjcmVhdGVNZXNoKHBhdGg6IHN0cmluZywgbWVzaE9wdGlvbnM6IE1lc2hPcHRpb25zID0ge30pOiBQcm9taXNlPFRIUkVFLk1lc2g+IHtcbiAgICBjb25zdCBnZW9tZXRyeTogVEhSRUUuQnVmZmVyR2VvbWV0cnkgPSBhd2FpdCB0aGlzLnN0bExvYWRlci5sb2FkQXN5bmMocGF0aClcbiAgICBjb25zdCBtZXNoID0gbmV3IFRIUkVFLk1lc2goZ2VvbWV0cnksIHRoaXMubWF0ZXJpYWwpXG5cbiAgICBjb25zdCB2ZWN0b3JPcHRpb25zID0gWydwb3NpdGlvbicsICdzY2FsZScsICd1cCddXG4gICAgY29uc3Qgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRNZXNoT3B0aW9ucywgbWVzaE9wdGlvbnMpXG5cbiAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhvcHRpb25zKS5mb3JFYWNoKChvcHRpb24pID0+IHtcbiAgICAgIGlmICh2ZWN0b3JPcHRpb25zLmluZGV4T2Yob3B0aW9uKSA+IC0xKSB7XG4gICAgICAgIGNvbnN0IHZlY3RvciA9IG9wdGlvbnNbb3B0aW9uXSBhcyBWZWN0b3IzXG4gICAgICAgIGNvbnN0IG1lc2hWZWN0b3JPcHRpb24gPSBtZXNoW29wdGlvbl0gYXMgVmVjdG9yM1xuICAgICAgICBtZXNoVmVjdG9yT3B0aW9uLnNldCh2ZWN0b3IueCwgdmVjdG9yLnksIHZlY3Rvci56KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWVzaFtvcHRpb25dID0gb3B0aW9uc1tvcHRpb25dXG4gICAgICB9XG4gICAgfSlcblxuICAgIHJldHVybiBtZXNoXG4gIH1cblxuICByZW5kZXIgPSAoKSA9PiB7XG4gICAgdGhpcy5yZW5kZXJlci5yZW5kZXIodGhpcy5zY2VuZSwgdGhpcy5jYW1lcmEpXG4gIH1cblxuICBzZXRTaXplcygpIHtcbiAgICBjb25zdCB3aWR0aCA9IHRoaXMuZWxlUmVmLm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGhcbiAgICBjb25zdCBoZWlnaHQgPSB0aGlzLmVsZVJlZi5uYXRpdmVFbGVtZW50Lm9mZnNldEhlaWdodFxuXG4gICAgdGhpcy5jYW1lcmEuYXNwZWN0ID0gd2lkdGggLyBoZWlnaHRcbiAgICB0aGlzLmNhbWVyYS51cGRhdGVQcm9qZWN0aW9uTWF0cml4KClcblxuICAgIHRoaXMucmVuZGVyZXIuc2V0U2l6ZSh3aWR0aCwgaGVpZ2h0KVxuICB9XG5cbiAgb25XaW5kb3dSZXNpemUgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTaXplcygpXG4gICAgdGhpcy5yZW5kZXIoKVxuICB9XG59XG4iXX0=