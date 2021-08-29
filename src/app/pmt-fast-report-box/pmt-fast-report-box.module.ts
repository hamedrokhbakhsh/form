import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PmtFastReportBoxComponent } from './pmt-fast-report-box.component';
import {MatIconModule} from "@angular/material/icon";



@NgModule({
  declarations: [
    PmtFastReportBoxComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    PmtFastReportBoxComponent
  ]
})
export class PmtFastReportBoxModule { }
