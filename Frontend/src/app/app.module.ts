import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { EmployeeformComponent } from './employeeform/employeeform.component';
import { HeaderComponent } from './header/header.component';
import{FormsModule} from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { HTTP_INTERCEPTORS, HttpClient,HttpEvent,HttpHandler, HttpClientModule} from '@angular/common/http';
import { EmployeeserviceService } from './employeeservice.service';
import { AuthserviceService } from './authservice.service';
import { BackendserviceService } from './backendservice.service';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { EditemployeeComponent } from './editemployee/editemployee.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { TokeninterceptorService } from './tokeninterceptor.service';
import { Header2Component } from './header2/header2.component';
import { AuthguardserviceService } from './authguardservice.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmployeelistComponent,
    EmployeeformComponent,
    HeaderComponent,
    FooterComponent,
    AddemployeeComponent,
    EditemployeeComponent,
    HomeComponent,
    AdminComponent,
    Header2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [BackendserviceService,AuthserviceService, AuthguardserviceService,{
    provide:HTTP_INTERCEPTORS,
    useClass:TokeninterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
