import {Injectable} from '@angular/core';
import {IMessage} from '../model/message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messageList: IMessage[] = [
    {content: 'Xin chao'},
    {content: 'Cam on'},
    {content: 'Chao buoi sang'},
    {content: 'Chao buoi trua'},
    {content: 'Chao buoi toi'},
    {content: 'Chao buoi toi'},
    {content: 'Chao buoi toi'},
    {content: 'Chao buoi toi'},
    {content: 'Chao buoi toi'},
    {content: 'Chao buoi toi'},
    {content: 'Chao buoi toi'},
    {content: 'Chao buoi toi'},
    {content: 'Chao buoi toi'},
    {content: 'Chao buoi toi'},
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
