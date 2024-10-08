import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-structural-dir',
  standalone: true,
  imports: [CommonModule , FormsModule],
  templateUrl: './structural-dir.component.html',
  styleUrl: './structural-dir.component.css'
})
export class StructuralDirComponent {

  isDiv1Visible : boolean = false;
  isDiv2Visible : boolean = true;

  num1 : string = '';
  num2 : string = ''
  isActive : boolean = false;

  constructor(private router : Router) {

  }

  cityArray: string [] = ["Pune" , "Mumbai" , "Nagpur" , "Thane"];

  navigateToAttribute() {
    this.router.navigateByUrl('attribute-dir');
  }

  hideDiv1() {
    this.isDiv1Visible = false;
  }
  showDiv1() {
    this.isDiv1Visible = true;
  }

  toggleDiv2() {
    this.isDiv2Visible = !this.isDiv2Visible;
  }
}
