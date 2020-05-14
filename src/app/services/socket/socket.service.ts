import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  private socket: SocketIOClient.Socket;
  constructor() { }

  init() {
    this.socket = io('http://localhost:3000');
  }

  listen(eventName: string) {
    return new Observable((observer) => {
      this.socket.on(eventName, (data) => {
        observer.next(data);
      })
    })
  }

  disconnect() {
    this.socket.disconnect();
  }

  joinRoom(username: string, roomName: string): void {
    this.socket.emit('join', { username, roomName });
  }

  sendMessage(eventName: string, msg: string) {
    this.socket.emit(eventName, msg);
  }
}
