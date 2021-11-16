import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BcontrolFormComponent } from './components/bcontrol-form/bcontrol-form.component';
import { MedicationFormComponent } from './components/medication-form/medication-form.component';
import { MedicationListComponent } from './components/medication-list/medication-list.component';


const routes: Routes = [

{
  path: "",
  redirectTo:"/medication",
  pathMatch: "full"

},

{
  path:"medication",
  component: MedicationListComponent

},

{
  path:"medication/add",
  component: MedicationFormComponent

},

{
  path:"medication/update/:id",
  component: MedicationFormComponent

},

{
  path:"medication/birthControl/add",
  component: BcontrolFormComponent

},

{
  path:"medication/birthControl/update/:id",
  component: BcontrolFormComponent

}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
