import { Component } from '@angular/core';
import {QuizNavComponent} from "../quiz-nav/quiz-nav.component";

@Component({
  selector: 'app-quiz-home',
  standalone: true,
  imports: [
    QuizNavComponent
  ],
  templateUrl: './quiz-home.component.html',
  styleUrl: './quiz-home.component.css'
})
export class QuizHomeComponent {

}
