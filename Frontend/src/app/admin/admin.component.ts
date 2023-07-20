import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendserviceService } from '../backendservice.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  constructor(private api:BackendserviceService,private router:Router){}
  employees: any[] = [];
  ngOnInit(){
    this.api.fetchData().subscribe((res:any)=>{
      this.employees = res.data
    })
  }
  editForm(id:any){
    //console.log(id)
    this.router.navigate(["/edit/"+id]);
  }
  deleteForm(id:any){
      this.api.delete(id).subscribe((res:any)=>{console.log('Success')})
      this.api.fetchData().subscribe((res:any)=>{
      this.employees = res.data
    })
  
}
}
