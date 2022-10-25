import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Inject,
  ElementRef,
  Optional,
} from '@angular/core'
import { DOCUMENT } from '@angular/common'
import { FluentIconsRegistryService } from './fluent-icons-registry.service'
import { iconName } from './fluent-icons'

@Component({
  selector: `fluent-icons`,
  template: ``,
  styleUrls: [`./fluent-icons.component.css`],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FluentIconsComponent {
  private svg?: SVGElement

  @Input()
  set name(name: iconName) {
    if (this.svg) {
      this.element.nativeElement.removeChild(this.svg)
    }
    const data = this.fluentIconsRegistryService.getIcon(name)
    this.svg = this.svgElementFromString(data || ``)
    this.element.nativeElement.appendChild(this.svg)
  }

  constructor(
    private element: ElementRef,
    private fluentIconsRegistryService: FluentIconsRegistryService,
    @Optional() @Inject(DOCUMENT) private document: Document
  ) {}

  private svgElementFromString(svgContent: string): SVGElement {
    const div = this.document.createElement(`div`)
    div.innerHTML = svgContent
    return (
      div.querySelector(`svg`) ||
      this.document.createElementNS(`http://www.w3.org/2000/svg`, `path`)
    )
  }
}
