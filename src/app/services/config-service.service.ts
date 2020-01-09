import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigServiceService {

  constructor() { }

  setValue(key: string, value: any) {}
  getValue(key: string) {}
  isMuted(userid: string) {}
}
