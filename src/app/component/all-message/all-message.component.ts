import {Component, OnInit} from '@angular/core';
import {MessageService} from '../../service/message.service';
import {IMessage} from '../../model/message';

@Component({
  selector: 'app-all-message',
  templateUrl: './all-message.component.html',
  styleUrls: ['./all-message.component.css']
})
export class AllMessageComponent implements OnInit {
  messageList: IMessage[];

  constructor(private messageService: MessageService) {
    this.messageList = this.messageService.messageList;
  }

  ngOnInit() {
  }

}
