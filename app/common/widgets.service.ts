import {Injectable} from 'angular2/core';
import {PricingService} from "./pricing.service";

@Injectable({
  providers: [PricingService]
})
export class WidgetsService {
  widgets = [
    {name: 'Widget 01', price: 100},
    {name: 'Widget 02', price: 200},
    {name: 'Widget 03', price: 300},
    {name: 'Widget 04', price: 400}
  ];

  constructor(pricingService:PricingService) {
    this.widgets.map(widget => {
      widget.price = pricingService.halfPrice(widget.price);
      return widget;
    });
  }
}
