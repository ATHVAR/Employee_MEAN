import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {

  constructor(public http:HttpClient) { }

  fetchData(){
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}
