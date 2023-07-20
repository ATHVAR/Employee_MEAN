import { Component,OnInit } from '@angular/core';
import { EmployeeserviceService } from '../employeeservice.service';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit{
  constructor(public serve:EmployeeserviceService){}
  data:any;
  ngOnInit(): void {
    this.serve.fetchData().subscribe((users)=>{
      this.data = users
      console.log(users)
    })
  }

  gotoEmployeeForm(){
    
  }
}
