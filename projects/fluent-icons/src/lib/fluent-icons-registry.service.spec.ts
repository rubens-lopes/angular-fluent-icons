import { TestBed } from '@angular/core/testing'

import { FluentIconsRegistryService } from './fluent-icons-registry.service'

describe(`FluentIconsRegistryService`, () => {
  let service: FluentIconsRegistryService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(FluentIconsRegistryService)
  })

  it(`should be created`, () => {
    expect(service).toBeTruthy()
  })
})
