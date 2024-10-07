import { JsonPipe, SlicePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServiceService } from '../../service/service.service';

@Component({
  selector: 'app-post-api',
  standalone: true,
  imports: [FormsModule , JsonPipe],
  templateUrl: './post-api.component.html',
  styleUrl: './post-api.component.css'
})
export class PostApiComponent {

  debObj:any = {
    "departmentId": 0,
    "departmentnName": "",
    "departmentLogo": ""
  }

  deptList:any[]=[];

  constructor(private deptSrv : ServiceService) {}

  http = inject(HttpClient);

  ngOnInit(): void {
    this.getDepartment();
  }

  // onSave() {
  //   debugger;
  //   this.http.post("https://projectapi.gerasim.in/api/Complaint/AddNewDepartment",this.debObj).subscribe((res:any) => {
  //     debugger;
  //     if(res.result) {
  //       alert("Department Created Success");
  //       this.getDepartment();
  //     } else {
  //       alert(res.message);
  //     }
  //   })
  // }

  onUpdate() {
    this.http.post("https://projectapi.gerasim.in/api/EmployeeManagement/UpdateDepartment",this.debObj).subscribe((res:any) => {
      debugger;
      if(res.result) {
        alert('Department Updated Succesfully');
        this.getDepartment();
      } else {
        alert(res.message);
      }
    })
  }

  onDelete(id: number) {
    this.http.delete("https://projectapi.gerasim.in/api/EmployeeManagement/DeletedepartmentBydepartmentId?departmentId="+id).subscribe((res:any) => {
      debugger;
      const isDelete = confirm('Are you sure you want to delete ?');
      if(isDelete) {
        if(res.result) {
          this.getDepartment();
          alert("Department deleted successfully");
        } else {
          alert(res.message);
        }
      }
    })
  }

  onEdit(data: any) {
    this.debObj = data;
  }

  getDepartment() {
    debugger;
    this.deptSrv.getAllDept().subscribe((res:any) => {
      debugger;
      this.deptList = res.data; 
    })
  }

  onSave() {
    this.deptSrv.saveNewDept(this.debObj).subscribe((res:any) => {
      debugger;
      if(res.result) {
        alert("Department Created Successfully");
        this.getDepartment();
      } else {
        alert(res.message);
      }
    })
  }

}
