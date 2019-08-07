import {Injectable} from '@angular/core';
import {IMessage} from '../model/message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messageList: IMessage[] = [
    {content: 'Xin chao', user: 'admin'},
    {content: 'Cam on', user: 'admin1'},
    {content: 'Chao buoi sang', user: 'admin'},
    {content: 'Chao buoi trua', user: 'admin2'},
    {content: 'Chao buoi toi', user: 'admin3'},
    {content: 'Chao buoi toi', user: 'admin'},
    {content: 'Chao buoi toi', user: 'admin1'},
    {content: 'Chao buoi toi', user: 'admin4'},
    {content: 'Chao buoi toi', user: 'admin3'},
    {content: 'Chao buoi toi', user: 'admin1'},
    {content: 'Chao buoi toi', user: 'admin2'},
    {content: 'Chao buoi toi', user: 'admin3'},
    {content: 'Chao buoi toi', user: 'admin4'},
    {content: 'Chao buoi toi', user: 'admin4'},
  ];

  addMessage(message: IMessage) {
    this.messageList.push(message);
  }

  constructor() {
  }
}
