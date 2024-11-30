import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-recht',
  standalone: true,
  imports: [],
  templateUrl: './recht.component.html',
  styleUrl: './recht.component.css'
})
export class RechtComponent {
  page = signal<number>(0);

  maxPage = 2;

  constructor() {
    this.page.set(0);
  }

  nextPage() {
    this.page.update((prev) => {
      if(prev >= this.maxPage) {
        return 0;
      }
      return prev + 1;
    });
  }

  prevPage() {
    this.page.update((prev) => {
      if (prev > 0) {
        return prev - 1;
      }
      return this.maxPage;
    });
  }
}
