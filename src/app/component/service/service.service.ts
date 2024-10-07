import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  apiUrl : String = "https://projectapi.gerasim.in/api/";

  constructor(private http : HttpClient) { }

  getAllDept() {
    debugger;
    return this.http.get(this.apiUrl+"Complaint/GetParentDepartment");
  }

  saveNewDept(obj:any) {
    return this.http.post(`${this.apiUrl}EmployeeManagement/AddNewDepartment`,obj);
  }
}
