import { Component, NgModule, inject } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeformComponent} from './employeeform/employeeform.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { EditemployeeComponent } from './editemployee/editemployee.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { AuthserviceService } from './authservice.service';
import { AuthguardserviceService } from './authguardservice.service';

const routes: Routes = [{path:"", component:LoginComponent},
{path:'employeeform',component:AddemployeeComponent},
{path:'user',component:HomeComponent},
{path:"edit/:id",component:EditemployeeComponent},
{path:"home",canActivate:[()=>{
  const auth = inject(AuthguardserviceService);
  return auth.loggedIn();}],component:AdminComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
