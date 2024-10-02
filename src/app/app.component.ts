import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StructuralDirComponent } from "./component/structural-dir/structural-dir.component";
import { AttributeComponentComponent } from './component/attribute-component/attribute-component.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StructuralDirComponent ,AttributeComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_18_tutorail';
}
