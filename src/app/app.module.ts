import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { MicroLoginComponent } from './micro-login/micro-login.component';

export const customElements = [
  MicroLoginComponent
];

@NgModule({
  imports: [
    BrowserModule,
	FormsModule
  ],
  declarations: [
    ...customElements,
  ],
  entryComponents: [
    ...customElements
  ]
})
export class AppModule {
  ngDoBootstrap() { }
}
