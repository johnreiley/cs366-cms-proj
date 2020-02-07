import { Component, OnInit } from '@angular/core';
import { Message } from '../message.model';
import { MessageService } from '../message.service';

@Component({
  selector: 'cms-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {
  messages: Message[] = [];

  constructor(private msgService: MessageService) { 
  }

  ngOnInit() {
    this.messages = this.msgService.getMessages();
  }

  onSendMessage(message: Message) {
    this.messages.push(message);
  }

}
