# AngularFluentIcons

A tree-shakable icon library for Angular

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.0.

## Usage

Import `FluentIconsModule` on your module
```typescript
// app.module.ts
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { MyComponentComponent } from './componentes/my-component.component'
import { FluentIconsModule } from '@rubens.lopes/angular-fluent-icons'

@NgModule({
  declarations: [AppComponent, MyComponentComponent],
  imports: [BrowserModule, AppRoutingModule, FluentIconsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

  <fluent-icons class="fill-white w-16 h-16" name="album"></fluent-icons>

Use `FluentIconsRegistryService` to register which icons you are using
```typescript
// my-component.component.ts
import { Component } from '@angular/core'
import { FluentIconsRegistryService, fiAlbum } from '@rubens.lopes/angular-fluent-icons'

@Component({
  selector: `app-my-component`,
  templateUrl: `./my-component.component.html`,
})
export class MyComponentComponent {
  constructor(private fluentIconRegistry: FluentIconsRegistryService) {
    fluentIconRegistry.registerIcons([fiAlbum])
  }
}
```
Finally, use the `fluent-icons`  component on the html, with intellisense, and control size, color and margin via css class

```html
<!-- my-component.component.html-->
  <fluent-icons class="fill-white w-16 h-16" name="album"></fluent-icons> <- This is a album icon
```
