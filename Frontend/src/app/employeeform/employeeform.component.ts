import { Component } from '@angular/core';

@Component({
  selector: 'app-employeeform',
  templateUrl: './employeeform.component.html',
  styleUrls: ['./employeeform.component.css']
})
export class EmployeeformComponent {

  employee: any = {
    name: '',
    designation: '',
    location: '',
    salary: null};
    
    onSubmit() {
      this.employee = {
        name: '',
        designation: '',
        location: '',
        salary: null
      };
    }
}