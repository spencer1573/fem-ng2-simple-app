import {Injectable} from '@angular/core';
import { Config } from './config.model'

@Injectable()
export class StateService {
	private _message = 'Hello Message';
	private _message3 = 'this is message 3 you win!'
	config: Config = {
		name: 'Hello',
		description: 'Description'
	}

  getMessage(): string {
    return this._message;
  };

  setMessage(newMessage: string): void {
    this._message = newMessage;
  };

	getMessage3(): string {
		return this._message3;
	};

  setMessage3(newMessage3: string): void {
	  this._message3 = newMessage3;
	};
}
