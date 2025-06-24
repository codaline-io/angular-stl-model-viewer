import '@analogjs/vitest-angular/setup-zone'

import { getTestBed } from '@angular/core/testing'
import { BrowserTestingModule, platformBrowserTesting } from '@angular/platform-browser/testing'

import { afterEach, vi } from 'vitest'

afterEach(() => {
  vi.clearAllTimers()
})
console.log('annnus')
getTestBed().initTestEnvironment(
  BrowserTestingModule,
  platformBrowserTesting()
)
