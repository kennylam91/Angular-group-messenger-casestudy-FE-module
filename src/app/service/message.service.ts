import {Injectable} from '@angular/core';
import {IMessage} from '../model/message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messageList = [
    {id: 1, content: 'Xin chao'},
    {id: 2, content: 'Cam on'}
  ];

  constructor() {
  }
}
