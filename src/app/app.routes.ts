import { Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { SkateComponent } from './components/skate/skate.component';
import { BmxComponent } from './components/bmx/bmx.component';
import { PatinesComponent } from './components/patines/patines.component';
import { ScootersComponent } from './components/scooters/scooters.component';

export const routes: Routes = [
    {path: '', redirectTo: 'landing', pathMatch: 'full'},
    {path: 'landing', component: LandingComponent},
    {path: 'skate', component: SkateComponent},
    {path: 'bmx', component: BmxComponent},
    {path: 'patines', component: PatinesComponent},
    {path: 'scooters', component: ScootersComponent}
];
