import {EventEmitter, Injectable} from '@angular/core';
import {webSocket, WebSocketSubject} from 'rxjs/webSocket';

// TODO: https://blog.angulartraining.com/how-to-use-websockets-with-rxjs-and-angular-b98e7fd8be82 use this

const LOULT_SOCKET_URL = 'https://loult.family/socket';

@Injectable({
  providedIn: 'root'
})
export class LoultSocketService {

  webSocket: WebSocketSubject<string | ArrayBuffer>;
  // events data types are set to void for now, as a placeholder
  public userListEvent =  new EventEmitter<void>();
  public userConnectEvent = new EventEmitter<void>();
  public userDisconnectEvent = new EventEmitter<void>();
  public messageEvent = new EventEmitter<void>();
  public attackLaunchEvent = new EventEmitter<void>();
  public attackCombatEvent = new EventEmitter<void>();
  public effectEvent = new EventEmitter<void>();
  public notificationEvent = new EventEmitter<void>();
  public audioEvent = new EventEmitter<ArrayBuffer>();

  constructor() {
  }

  public connect() {
    // TODO: while websocket is undefined, attempt at reconnecting

    // TODO : add error/disconnect handling (this should reset the websocket field to undefined)
    this.webSocket = webSocket(LOULT_SOCKET_URL);
    this.webSocket.asObservable().subscribe(data => this.onMessage(data));
  }

  private onMessage(msgData: string | ArrayBuffer) {
    if (typeof msgData === 'string') {
      this.handleJSONMessage(JSON.parse(msgData));
    } else if (msgData instanceof ArrayBuffer) {
      this.handleAudioData(msgData);
    }
  }

  private handleJSONMessage(msg: any) {
    switch (msg.type) {
      case 'backlog':
        // todo
        break;
      case 'msg':
      case 'bot':
        // TODO
        break;
      case 'private_msg':
        // TODO
        break;
      case 'connect':
        // TODO
        break;
      case 'disconnect':
        // TODO
        break;
      case 'userlist':
        // TODO
        break;
      case 'attack':
        // TODO
        break;
      case 'wait':
        // TODO
        break;
      case 'antiflood':
        // TODO
        break;
    }
  }

  private handleAudioData(msg: ArrayBuffer) {
    // TODO
  }

  private sendMessage(msg: BaseMessage) {
    this.webSocket.next(JSON.stringify(msg));
  }

  public sendChat() {}

  public sendPrivate() {}

  public sendAttack() {}
}
