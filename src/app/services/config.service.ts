import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  public volChangeEvent = new EventEmitter<number>();
  public muteAudioEvent = new EventEmitter<boolean>();
  public muteUserEvent = new  EventEmitter<[string, boolean]>();

  private muteStatus = false;
  // TODO : define volume range properly
  private volume = 1;
  private mutedUsers: Array<string>;
  constructor() { }

  changeMuteStatus(muteStatus: boolean) {
    if (muteStatus !== this.muteStatus) { this.muteAudioEvent.emit(muteStatus); }
    this.muteStatus = muteStatus;
  }

  changeUserMute(user: string, muteStatus: boolean) {
    // TODO
  }

  isMuted(userid: string): boolean {}

  getVolume() {
    return this.volume;
  }
}
