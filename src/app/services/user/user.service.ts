import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private username: string;
  private roomName: string;
  constructor() { }

  setInfo(username: string, roomName: string): void {
    this.username = username;
    this.roomName = roomName;
  }

  getUserame(): string {
    return this.username;
  }

  getRoomName(): string {
    return this.roomName;
  }

  checkInfo(): boolean {
    let user = this.username.trim().toLowerCase();
    let room = this.roomName.trim().toLowerCase();

    return (user == "" || room == "") ? false : true;
  }
}
