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
    this.message = {
      username: this.userService.loginUser.username,
      content: messageText
    };
    console.log(this.messageList);
  }

  constructor(private messageService: MessageService, private userService: UserService) {

  }

  ngOnInit() {

  }

}
