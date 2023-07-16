import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeformComponent} from './employeeform/employeeform.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [{path:'login', component:LoginComponent},{path:'form',component:EmployeeformComponent},{path:'list',component:EmployeelistComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
