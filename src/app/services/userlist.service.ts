import { Injectable } from '@angular/core';
import {LoultSocketService} from './loult-socket.service';

@Injectable({
  providedIn: 'root'
})
export class UserlistService {
  /*
      Used to keep the users connected to the channel
   */
  constructor(loultSocket: LoultSocketService) { }
}
