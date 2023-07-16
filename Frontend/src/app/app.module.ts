import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { EmployeeformComponent } from './employeeform/employeeform.component';
import { HeaderComponent } from './header/header.component';
import{FormsModule,ReactiveFormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmployeelistComponent,
    EmployeeformComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
