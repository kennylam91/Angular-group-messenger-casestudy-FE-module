import {Injectable} from '@angular/core';
import {IMessage} from '../model/message';
import * as $ from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messageList: IMessage[] = [
    {content: 'Xin chao', username: 'admin'},
    {content: 'Cam on', username: 'admin1'},
    {content: 'Chao buoi sang', username: 'admin'},
    {content: 'Chao buoi trua', username: 'admin2'},
    {content: 'Chao buoi toi', username: 'admin3'},
    {content: 'Chao buoi toi', username: 'admin'},
    {content: 'Chao buoi toi', username: 'admin1'},
    {content: 'Chao buoi toi', username: 'admin4'},
    {content: 'Chao buoi toi', username: 'admin3'},
    {content: 'Chao buoi toi', username: 'admin1'},
    {content: 'Chao buoi toi', username: 'admin2'},
    {content: 'Chao buoi toi', username: 'admin3'},
    {content: 'Chao buoi toi', username: 'admin4'},
    {content: 'Chao buoi toi', username: 'admin4'},
  ];

  addMessage(message: IMessage) {
    this.messageList.push(message);
  }

  scrollAllMessage() {
    $(document).ready(() => {
      const scrollHeight = document.getElementById('all-message').scrollHeight;
      $('#all-message').scrollTop(scrollHeight);
      console.log(scrollHeight);
    });
  }

  constructor() {
  }
}
