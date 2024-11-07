import { Routes } from '@angular/router';
import { HomeComponent } from './hello/home.component';
import {SortComponent} from "./sort/sort.component";

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'sort', component: SortComponent}
];
