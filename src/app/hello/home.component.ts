import {Component, signal} from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-hello',
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
    },/*{
      routerLinkUrl: "/math",
      name: "Summary Math",
      desc: "A summary and a set of examples collected by me for the 1. math exam of school-year 2024/25"
    }*/])
  }
}
