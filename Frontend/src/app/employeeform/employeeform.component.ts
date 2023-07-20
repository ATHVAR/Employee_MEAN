import { Component } from '@angular/core';
import { FormsModule,NgForm } from '@angular/forms';
import { BackendserviceService } from '../backendservice.service';
import { ActivatedRoute,Router } from '@angular/router';


@Component({
  selector: 'app-employeeform',
  templateUrl: './employeeform.component.html',
  styleUrls: ['./employeeform.component.css']
})
export class EmployeeformComponent {
  constructor(private api:BackendserviceService,private router:Router){}

  employee={
    name:'',
    designation:'',
    salary:'',
    location:''
  }

  onSubmit(){
   

    this.api.addEmployeeData(this.employee).subscribe(
      (data) => {
        console.log('success');
      }
    );
    this.router.navigate(["/home"])
  }
  
}