import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendserviceService } from '../backendservice.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private api:BackendserviceService,private router:Router){}
  employees: any[] = [];
  ngOnInit(){
    this.api.fetchData().subscribe((res:any)=>{
      this.employees = res.data
    })
  }

}
