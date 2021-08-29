import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormModule} from "./form/form.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {PmtFastReportBoxModule} from "./pmt-fast-report-box/pmt-fast-report-box.module";
import {ProfileModule} from "./profile/profile.module";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormModule,
    BrowserAnimationsModule,
    PmtFastReportBoxModule,
    ProfileModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
