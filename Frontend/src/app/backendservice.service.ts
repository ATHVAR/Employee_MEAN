import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendserviceService {

  data:any
  constructor(private http:HttpClient) { }

  addEmployeeData(data:any) {
  
    return this.http.post<any>("http://localhost:3000/api/addemployee", data);
  }

  editEmployeeData(updated:any,id:any) {
    
    return this.http.put(`http://localhost:3000/api/editemployee/${id}`, updated);
  }

  fetchData(){
    //console.log('Sending request')
    return this.http.get('http://localhost:3000/api/fetchdata');
  }

  getDetails(id:any){
    return this.http.get(`http://localhost:3000/api/userform/${id}`); 
  }

  delete(id:any){
    return this.http.delete(`http://localhost:3000/api/deleteform/${id}`);
  }
}
