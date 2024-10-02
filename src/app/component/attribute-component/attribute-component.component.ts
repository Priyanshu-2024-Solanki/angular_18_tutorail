import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-attribute-component',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './attribute-component.component.html',
  styleUrl: './attribute-component.component.css'
})
export class AttributeComponentComponent {

  div1BgColor: string = 'bg-primary';
  isDiv2Active : boolean = false;
  num1: string = '';
  num2: string = '';  
  isActive : boolean = false;

  studentList: any[] = [
    {studId:12, totalMarks : 23 , gender:'male' , name:'AAA', city: 'Pune', isActive: false},
    {studId:22, totalMarks : 33 , gender:'male' , name:'BBB', city: 'Mumbai', isActive: false},
    {studId:32, totalMarks : 67 , gender:'female' , name:'CC', city: 'Jalgao', isActive: false},
    {studId:56, totalMarks : 98 , gender:'male' , name:'DD', city: 'Mumbai', isActive: true},
    {studId:34, totalMarks : 20 , gender:'female' , name:'EE', city: 'Nagpur', isActive: false},
    {studId:76, totalMarks : 50 , gender:'male' , name:'FFF', city: 'Thane', isActive: true},
  ]

  addRedClass() {
    this.div1BgColor = 'bg-danger';
  }

  addBlueClass() {
    this.div1BgColor = 'bg-primary';
  }

  toggleDiv2Class() {
    this.isDiv2Active = !this.isDiv2Active;
  }

}
