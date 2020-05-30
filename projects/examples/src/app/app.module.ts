import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'

import { StlModelViewerModule } from '../../../angular-stl-model-viewer/src/public-api'

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StlModelViewerModule
  ],
  providers: []
})
export class AppModule { }
