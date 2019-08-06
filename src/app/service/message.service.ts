import {Injectable} from '@angular/core';
import {IMessage} from '../model/message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messageList: IMessage[] = [
    {content: 'Xin chao'},
    {content: 'Cam on'}
  ];

  addMessage(s: string) {
    const message: IMessage = {
        content: s
      }
    ;
    this.messageList.push(message);
  }

  constructor() {
  }
}
