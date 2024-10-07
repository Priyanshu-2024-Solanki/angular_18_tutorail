import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AttributeComponentComponent } from "./component/attribute-component/attribute-component.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, AttributeComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_18_tutorail';
}
