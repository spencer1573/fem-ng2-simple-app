import {Injectable} from "angular2/core";

@Injectable()
export class PricingService{
  halfPrice(price) {
    return price * 0.5;
  }
}
