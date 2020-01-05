import { Injectable } from '@angular/core';
import {LoultSocketService} from './loult-socket.service';
import {BehaviorSubject} from 'rxjs';

interface UserData {
  pokename: string;
  name: string;
  adj: string;
  color: string;
  img: string;
  is_me: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UserlistService {
  /*
      Used to keep the users connected to the channel
   */
  // TODO : https://coryrylan.com/blog/angular-observable-data-services
  // TODO : https://blog.angular-university.io/how-to-build-angular2-apps-using-rxjs-observable-data-services-pitfalls-to-avoid/
  private userListStore: UserData[] = [];
  private userListSubject = new BehaviorSubject<UserData[]>([]);
  readonly userList = this.userListSubject.asObservable();

  constructor(loultSocket: LoultSocketService) { }

  public initList(userList: UserData[]) {}

  public userConnect(userData: UserData) {}

  public userDisconnect(userid: string) {}

  public getCurrentUser(): UserData {}
}
