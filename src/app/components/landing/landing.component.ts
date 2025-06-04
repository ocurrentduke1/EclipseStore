import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-landing',
  imports: [NavBarComponent],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {

}
