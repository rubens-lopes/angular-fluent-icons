import { Injectable } from '@angular/core'
import { FluentIcon, iconName } from './fluent-icons'

@Injectable({
  providedIn: `any`,
})
export class FluentIconsRegistryService {
  private registry = new Map<iconName, string>()

  public registerIcons(icons: FluentIcon[]) {
    icons.forEach((icon) => this.registry.set(icon.name, icon.data))
  }

  public getIcon(name: iconName): string | undefined {
    if (!this.registry.has(name)) {
      console.warn(`We could not find the icon with the name ${name}, did you
add it to the icon registry?`)
    }

    return this.registry.get(name)
  }
}
