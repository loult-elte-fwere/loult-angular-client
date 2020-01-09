import { Component, OnInit } from '@angular/core';
import {LoultSocketService} from '../../services/loult-socket.service';

interface BaseMessage {
  text: string;
}

interface UserMessage extends BaseMessage {
  userid: string;
}

interface Notification extends BaseMessage {
  category: 'primary' | 'valid' | 'warning';
}

// TODO : use classes instead of interface

@Component({
  selector: 'app-messages-log',
  templateUrl: './messages-log.component.html',
  styleUrls: ['./messages-log.component.scss']
})
export class MessagesLogComponent implements OnInit {

  messageBacklog: BaseMessage[] = [];

  constructor(private loultSocket: LoultSocketService) { }

  ngOnInit() {
    this.loultSocket.messageEvent.subscribe();
  }

  isUserMsg(msg : BaseMessage){
    return msg instanceof User
  }

}
