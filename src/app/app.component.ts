import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Eclipse-app';
}
