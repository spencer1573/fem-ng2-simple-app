import {Component} from 'angular2/core';

@Component({
  selector: 'widgets',
  template: `
    <div class="widget">
      <h1 *ngIf="show">{{inputVal}}</h1>
      <input [(ngModel)]="inputVal" placeholder="hey">
      
      <button [style.transform]="xpos" (click)="toggleShow()">click</button>
      <ul>
        <li *ngFor="#num of [1,2,3,4]">
          {{num}}
        </li>
      </ul>
      <div class="scroll" (scroll)="handleScroll()">
        <h1>hey</h1>
        <h1>hey</h1>
        <h1>hey</h1>
        <h1>hey</h1>
        <h1>hey</h1>
        <h1>hey</h1>
        <h1>hey</h1>
      </div>
    </div>
  `,
  styles: [`
    .scroll {
      height: 30px;
      width: 300px;
      overflow-y: scroll;
    }
    button {
      transition: transform .3s ease-in;
    }
  `]
})
export class Widgets {
  message: string = 'heydsfsda!';
  inputVal: string = '';
  xpos = 'translateX(0px)';
  count = 0;
  show = true;
  constructor() {
    setInterval(() => {
      this.transform()
    }, 500);
  }
  
  toggleShow() {
    this.show = !this.show;
  }
  
  transform() {
    this.count += 5;
    this.xpos = `translateX(${this.count}px)`;
  }
  handleScroll() {
    console.log('scroll');
  }
}
