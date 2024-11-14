import {Component, signal} from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  redirects = signal<{routerLinkUrl: string, name: string, desc: string}[]>([])

  constructor() {
    this.redirects.set([{
      routerLinkUrl: "/sort",
      name: "Sort Visualisation",
      desc: "A simple visualisation of sorting arrays to understand the different algorithms"
    },{
      routerLinkUrl: "/quiz",
      name: "Quiz Game",
      desc: "A simple quiz-home app, which lets you create and play Quizes!"
    }])
  }
}
