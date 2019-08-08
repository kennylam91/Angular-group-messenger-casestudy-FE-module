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

  private message: IMessage;
  private messageList: IMessage[];

  onSubmit(messageText: string) {
    this.messageList = this.messageService.messageList;
    this.message = {
      id: 10,
      username: this.userService.loginUser.username,
      content: messageText
    };
    this.messageService.createMessage(this.message)
      .subscribe(next => this.messageList.push(next));
  }

  constructor(private messageService: MessageService, private userService: UserService) {
  }

  ngOnInit() {
  }

}
