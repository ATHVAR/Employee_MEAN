import { Component } from '@angular/core';
import { FormsModule,NgForm } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { BackendserviceService } from '../backendservice.service';

@Component({
  selector: 'app-editemployee',
  templateUrl: './editemployee.component.html',
  styleUrls: ['./editemployee.component.css']
})
export class EditemployeeComponent {
  constructor(private api:BackendserviceService,private router:Router,private activatedRoute:ActivatedRoute){}

  employee={
    id:'',
    name:'',
    designation:'',
    salary:'',
    location:''
  }

  ngOnInit():void{
    const id=this.activatedRoute.snapshot.paramMap.get('id');
    this.api.getDetails(id).subscribe((res:any)=>{
      this.employee.id=res.data._id;
      this.employee.name = res.data.name;
      this.employee.designation = res.data.designation;
      this.employee.salary = res.data.salary;
      this.employee.location = res.data.location;
    })
  }


  onSubmit(){


    this.api.editEmployeeData(this.employee,this.employee.id).subscribe(
      (data) => {
        console.log('successful!!');
      }
   );
    this.router.navigate(["/home"])
  }
}
