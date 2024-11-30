import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {SortComponent} from "./sort/sort.component";
import {QuizHomeComponent} from "./quiz/quiz-home/quiz-home.component";
import { RechtComponent } from './recht/recht.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'sort', component: SortComponent},
  { path: 'quiz', component: QuizHomeComponent },
  { path: 'recht', component: RechtComponent }
];
