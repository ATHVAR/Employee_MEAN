import { Component } from '@angular/core';
import { FormsModule,NgForm} from '@angular/forms';
import { AuthserviceService } from '../authservice.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  
  constructor( private authService:AuthserviceService,private router:Router) { }
  user={
    email:'',
    password:''
  }
  loginuser(){
    this.authService.loginuser(this.user).subscribe((res:any)=>{
      localStorage.setItem('token',res.token);
      this.router.navigate([res.api]);
  
  })
  }
}
