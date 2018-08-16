import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { StlModelViewerModule } from 'angular-stl-model-viewer'

import { AppComponent } from './app.component'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StlModelViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
