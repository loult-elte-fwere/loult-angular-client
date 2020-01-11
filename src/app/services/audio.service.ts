import { Injectable } from '@angular/core';
import {ConfigService} from './config.service';
import {LoultSocketService} from './loult-socket.service';

@Injectable({
  providedIn: 'root'
})
export class AudioService {

  // this is the userid of the last user who submitted a message, used to figure out
  // if the incoming audio should be muted
  lastMsgUser: string;
  audioContext: AudioContext;
  gain: GainNode;
  constructor(
    private configService: ConfigService,
    private loultSocket: LoultSocketService)
  {
    // TODO : subscription for messages when messages are ready
    this.audioContext = new AudioContext();
    this.gain = this.audioContext.createGain();
    this.loultSocket.messageEvent.subscribe();
    this.gain.connect(this.audioContext.destination);

    // Subscription to config change events
    this.configService.volChangeEvent.subscribe(volValue => this.gain.gain.value = volValue);
    this.configService.muteAudioEvent.subscribe(muteStatus =>
      this.gain.gain.value = muteStatus ? 0 : this.configService.getVolume());

    // Subscription to message events
    this.loultSocket.audioEvent.subscribe(data => this.playAudio(data));
  }

  private playAudio(data: ArrayBuffer) {
    if (this.lastMsgUser !== undefined) {
      if (this.configService.isMuted(this.lastMsgUser)) {
        return;
      }
    }
    const context = this.audioContext;
    const gain = this.gain;
    this.audioContext.decodeAudioData(data, buf => {
      const source = context.createBufferSource();
      source.buffer = buf;
      source.connect(gain);
      source.start();
    })
  }
}
