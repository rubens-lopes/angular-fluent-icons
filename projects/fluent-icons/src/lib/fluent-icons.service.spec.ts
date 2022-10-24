import { TestBed } from '@angular/core/testing'

import { FluentIconsService } from './fluent-icons.service'

describe(`FluentIconsService`, () => {
  let service: FluentIconsService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(FluentIconsService)
  })

  it(`should be created`, () => {
    expect(service).toBeTruthy()
  })
})
