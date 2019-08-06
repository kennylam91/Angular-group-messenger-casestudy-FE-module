import {Component, OnInit} from '@angular/core';
import {IMessage} from '../../model/message';
import {MessageService} from '../../service/message.service';

@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.component.html',
  styleUrls: ['./new-message.component.css']
})
export class NewMessageComponent implements OnInit {

  private content: string;

  onSubmit() {
    this.messageService.addMessage(this.content);
    this.content = '';
  }

  constructor(private messageService: MessageService) {
  }

  ngOnInit() {
  }

}
