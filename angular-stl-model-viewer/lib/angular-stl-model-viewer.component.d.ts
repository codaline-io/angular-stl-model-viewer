import { ElementRef, EventEmitter, NgZone, OnDestroy, OnInit, ChangeDetectorRef } from '@angular/core';
import * as THREE from 'three';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';
import * as ɵngcc0 from '@angular/core';
export interface MeshOptions {
    castShadow?: boolean;
    position?: THREE.Vector3;
    receiveShadow?: boolean;
    scale?: THREE.Vector3;
    up?: THREE.Vector3;
    userData?: {
        [key: string]: any;
    };
    visible?: boolean;
}
export declare class StlModelViewerComponent implements OnInit, OnDestroy {
    private cdr;
    private eleRef;
    private ngZone;
    stlModels: string[];
    hasControls: boolean;
    camera: THREE.PerspectiveCamera;
    cameraTarget: THREE.Vector3;
    light: THREE.Light;
    material: THREE.Material;
    scene: THREE.Scene;
    renderer: THREE.WebGLRenderer;
    controls: any | null;
    meshOptions: MeshOptions[];
    rendered: EventEmitter<void>;
    hasWebGL: boolean;
    meshGroup: THREE.Object3D;
    isRendered: boolean;
    showStlModel: boolean;
    stlLoader: STLLoader;
    constructor(cdr: ChangeDetectorRef, eleRef: ElementRef, ngZone: NgZone);
    ngOnInit(): void;
    ngOnDestroy(): void;
    private init;
    createMesh(path: string, meshOptions?: MeshOptions): Promise<THREE.Mesh>;
    render: () => void;
    setSizes(): void;
    onWindowResize: () => void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<StlModelViewerComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<StlModelViewerComponent, "stl-model-viewer", never, { "stlModels": "stlModels"; "hasControls": "hasControls"; "camera": "camera"; "cameraTarget": "cameraTarget"; "light": "light"; "material": "material"; "scene": "scene"; "renderer": "renderer"; "controls": "controls"; "meshOptions": "meshOptions"; }, { "rendered": "rendered"; }, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1zdGwtbW9kZWwtdmlld2VyLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJhbmd1bGFyLXN0bC1tb2RlbC12aWV3ZXIuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIE5nWm9uZSwgT25EZXN0cm95LCBPbkluaXQsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5pbXBvcnQgeyBTVExMb2FkZXIgfSBmcm9tICd0aHJlZS9leGFtcGxlcy9qc20vbG9hZGVycy9TVExMb2FkZXInO1xuZXhwb3J0IGludGVyZmFjZSBNZXNoT3B0aW9ucyB7XG4gICAgY2FzdFNoYWRvdz86IGJvb2xlYW47XG4gICAgcG9zaXRpb24/OiBUSFJFRS5WZWN0b3IzO1xuICAgIHJlY2VpdmVTaGFkb3c/OiBib29sZWFuO1xuICAgIHNjYWxlPzogVEhSRUUuVmVjdG9yMztcbiAgICB1cD86IFRIUkVFLlZlY3RvcjM7XG4gICAgdXNlckRhdGE/OiB7XG4gICAgICAgIFtrZXk6IHN0cmluZ106IGFueTtcbiAgICB9O1xuICAgIHZpc2libGU/OiBib29sZWFuO1xufVxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgU3RsTW9kZWxWaWV3ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gICAgcHJpdmF0ZSBjZHI7XG4gICAgcHJpdmF0ZSBlbGVSZWY7XG4gICAgcHJpdmF0ZSBuZ1pvbmU7XG4gICAgc3RsTW9kZWxzOiBzdHJpbmdbXTtcbiAgICBoYXNDb250cm9sczogYm9vbGVhbjtcbiAgICBjYW1lcmE6IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhO1xuICAgIGNhbWVyYVRhcmdldDogVEhSRUUuVmVjdG9yMztcbiAgICBsaWdodDogVEhSRUUuTGlnaHQ7XG4gICAgbWF0ZXJpYWw6IFRIUkVFLk1hdGVyaWFsO1xuICAgIHNjZW5lOiBUSFJFRS5TY2VuZTtcbiAgICByZW5kZXJlcjogVEhSRUUuV2ViR0xSZW5kZXJlcjtcbiAgICBjb250cm9sczogYW55IHwgbnVsbDtcbiAgICBtZXNoT3B0aW9uczogTWVzaE9wdGlvbnNbXTtcbiAgICByZW5kZXJlZDogRXZlbnRFbWl0dGVyPHZvaWQ+O1xuICAgIGhhc1dlYkdMOiBib29sZWFuO1xuICAgIG1lc2hHcm91cDogVEhSRUUuT2JqZWN0M0Q7XG4gICAgaXNSZW5kZXJlZDogYm9vbGVhbjtcbiAgICBzaG93U3RsTW9kZWw6IGJvb2xlYW47XG4gICAgc3RsTG9hZGVyOiBTVExMb2FkZXI7XG4gICAgY29uc3RydWN0b3IoY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgZWxlUmVmOiBFbGVtZW50UmVmLCBuZ1pvbmU6IE5nWm9uZSk7XG4gICAgbmdPbkluaXQoKTogdm9pZDtcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xuICAgIHByaXZhdGUgaW5pdDtcbiAgICBjcmVhdGVNZXNoKHBhdGg6IHN0cmluZywgbWVzaE9wdGlvbnM/OiBNZXNoT3B0aW9ucyk6IFByb21pc2U8VEhSRUUuTWVzaD47XG4gICAgcmVuZGVyOiAoKSA9PiB2b2lkO1xuICAgIHNldFNpemVzKCk6IHZvaWQ7XG4gICAgb25XaW5kb3dSZXNpemU6ICgpID0+IHZvaWQ7XG59XG4iXX0=