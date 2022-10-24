import { ComponentFixture, TestBed } from '@angular/core/testing'

import { FluentIconsComponent } from './fluent-icons.component'

describe(`FluentIconsComponent`, () => {
  let component: FluentIconsComponent
  let fixture: ComponentFixture<FluentIconsComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FluentIconsComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(FluentIconsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it(`should create`, () => {
    expect(component).toBeTruthy()
  })
})
