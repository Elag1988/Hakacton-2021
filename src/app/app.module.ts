import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MedicationFormComponent } from './components/medication-form/medication-form.component';
import { MedicationListComponent } from './components/medication-list/medication-list.component';
import { BcontrolFormComponent } from './components/bcontrol-form/bcontrol-form.component';
import { MedicationService } from './services/medication.service';
import { BcontrolService } from './services/bcontrol.service';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MedicationFormComponent,
    MedicationListComponent,
    BcontrolFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [MedicationService, BcontrolService],
  bootstrap: [AppComponent]
})
export class AppModule { }
