import { NgModule } from '@angular/core'
import { StlModelViewerComponent } from './angular-stl-model-viewer.component'

@NgModule({
  exports: [StlModelViewerComponent],
  imports: [
    StlModelViewerComponent
  ]
})
export class StlModelViewerModule { }
