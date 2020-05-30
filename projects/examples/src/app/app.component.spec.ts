import { TestBed, async } from '@angular/core/testing'
import { AppComponent } from './app.component'

import { StlModelViewerModule } from '../../../angular-stl-model-viewer/src/public-api'

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [ StlModelViewerModule ]
    }).compileComponents()
  }))

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.componentInstance
    expect(app).toBeTruthy()
  })

  it("should have as title 'Examples'", () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.componentInstance
    expect(app.title).toEqual('Examples')
  })

  it('should render stl-model-viewer', async () => {
    const fixture = TestBed.createComponent(AppComponent)
    fixture.detectChanges()
    const compiled = fixture.nativeElement
    expect(compiled.querySelectorAll('stl-model-viewer').length).toBe(2)
  })
})
