import {Component} from 'angular2/core';
import {WidgetsService} from "../common/widgets.service";

@Component({
  selector: 'widgets',
  template: `
   <h1>Hello widgets!</h1>
   <div *ngFor="#widget of widgets">{{widget.name}} at {{widget.price}} dollahs!</div>
   `,
})
export class Widgets {
  widgets: any[] = [];
  constructor(widgetsService:WidgetsService) {
    this.widgets = widgetsService.widgets;
  }
}
