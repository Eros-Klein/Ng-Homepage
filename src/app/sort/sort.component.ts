import {Component, signal} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-sort',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink
  ],
  templateUrl: './sort.component.html',
  styleUrl: './sort.component.css'
})
export class SortComponent {
  sleep = async (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

  arrayToSort = signal<any[]>(this.generateRandomArray(10))

  highlightedFields = signal<number[]>([0,1])

  furtherHighlightedFields = signal<number[]>([])

  speed = signal<number>(50)

  fullBarMode = signal<boolean>(false)

  async startBubbleSort(){
    for (let i = 0; i < this.arrayToSort().length; i++){
      for (let j = 0; j < this.arrayToSort().length; j++){
        if(this.arrayToSort()[j] > this.arrayToSort()[j+1]){
          [this.arrayToSort()[j], this.arrayToSort()[j+1]] = [this.arrayToSort()[j+1], this.arrayToSort()[j]];
          this.highlightedFields.set([j, j+1]);
          await this.sleep((this.speed()-100)* -5);
          this.furtherHighlightedFields.set([j, j+1])
        }
      }
    }
  }

  async startRandomSort(){
    while (!this.isSorted(this.arrayToSort())){
      const index1 = parseInt((Math.random() * this.arrayToSort().length) + "");
      const index2 = parseInt((Math.random() *this.arrayToSort().length) + "");

      [this.arrayToSort()[index1], this.arrayToSort()[index2]] = [this.arrayToSort()[index2], this.arrayToSort()[index1]];
      this.highlightedFields.set([index1, index2]);
      await this.sleep((this.speed()-100) * -50);
      this.furtherHighlightedFields.set([index1, index2])
    }
  }

  isSorted(arr: number[]){
    let cache: number = 0;
    let success = true;
    arr.forEach(e => {
      if (e < cache){
        success = false;
      }
      cache = e;
    })

    return success;
  }

  reset() {
    if(this.fullBarMode()) {
      this.arrayToSort.set(this.generateRandomArray(100, 400))
    }
    else this.arrayToSort.set(this.generateRandomArray(10))
  }

  generateRandomArray(len:number, max:number=50){
    const arr: number[] = []
    for (let i = 0; i < len; i++){
      arr.push(parseInt(Math.random()*max + ""))
    }
    return arr;
  }
}
