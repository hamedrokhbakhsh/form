import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';
import { PlaceholderDirective } from './placeholder.directive';
import {FormioModule} from "@formio/angular";



@NgModule({
  declarations: [
    FormComponent,
    PlaceholderDirective
  ],
  imports: [
    CommonModule,
    FormioModule
  ],
    exports: [
        PlaceholderDirective,
        FormComponent
    ]
})
export class FormModule { }
