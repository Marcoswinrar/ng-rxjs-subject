import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  public message = new Subject<string>();

  setMessage(value: string) {
    this.message.next(value);
  }
}
