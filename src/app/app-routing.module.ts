import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Mycomponents/dashboard/dashboard.component';
import { FormComponent } from './Mycomponents/form/form.component';

const routes: Routes = [
  {path:'' ,redirectTo:'/dashboard', pathMatch:'full'},
  {path:"dashboard", component:DashboardComponent},
  {path:"form",component:FormComponent},
  {path:"update/:Id",component:FormComponent},
  {path:"**", component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }