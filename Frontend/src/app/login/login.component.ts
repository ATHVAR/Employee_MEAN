import { Component,OnInit } from '@angular/core';
import { FormsModule,ReactiveFormsModule,FormBuilder,FormGroup,Validators} from '@angular/forms';
import { AuthserviceService } from '../authservice.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  User={
    email:'',
    password:''
  }
  
  constructor(private fb: FormBuilder, private authService:AuthserviceService) { }

  ngOnInit(): void {
   
  }
  console.log(this.User);

  submitForm(): void {
    
  }
}
