import { Injectable } from '@angular/core';
import {LoultSocketService} from './loult-socket.service';
import {BehaviorSubject} from 'rxjs';

interface UserData {
  name: string;
  adjective: string;
  color: string;
  img: string;
  is_me: boolean;
  user_id: string;
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

  public refreshList(userList: UserData[]) {
    this.userListStore = userList;
    // TODO: update Suject
  }

  public userConnect(userData: UserData) {}

  public userDisconnect(userid: string) {}

  public getCurrentUser(): UserData {
    return this.userListStore.find(user => user.is_me);
  }

  public getUser(userid: string) {
    return this.userListStore.find(user => user.user_id === userid);
  }
}
