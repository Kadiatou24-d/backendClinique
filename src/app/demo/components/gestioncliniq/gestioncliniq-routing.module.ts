import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientComponent } from './patient/patient.component';

const routes: Routes = [
  
  {path:'medecin', loadChildren: () =>import('./medecin/medecin.module').then(m=>m.MedecinModule)},
  {path:'patient',loadChildren:() =>import('./patient/patient.module').then(m=>m.PatientModule)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestioncliniqRoutingModule { }
