import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EmpdetailsComponent } from './empdetails/empdetails.component';
import { AddempComponent } from './addemp/addemp.component';
import { compileBaseDefFromMetadata } from '@angular/compiler';
import { ManagerViewComponent } from './manager-view/manager-view.component';

const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  }, {
    path:'emp',
    component:EmpdetailsComponent
  },
  {
    path:'addemp',
    component:AddempComponent
  },
  {
    path:'managerView',
    component:ManagerViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
