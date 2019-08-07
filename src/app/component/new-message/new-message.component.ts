import {Component, OnInit} from '@angular/core';
import {IMessage} from '../../model/message';
import {MessageService} from '../../service/message.service';
import {UserService} from '../../service/user.service';

@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.component.html',
  styleUrls: ['./new-message.component.css']
})
export class NewMessageComponent implements OnInit {

  private message: IMessage = {
    username: '',
    content: ''
  };

  onSubmit(messageText: string) {
    this.message.username = this.userService.loginUser.username;
    this.message.content = messageText;
    console.log(this.message);
    this.messageService.addMessage(this.message);
    this.messageService.scrollAllMessage();
  }

  constructor(private messageService: MessageService, private userService: UserService) {

  }

  ngOnInit() {
  }

}
