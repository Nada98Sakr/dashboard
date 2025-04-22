import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

declare global {
  interface Window {
    socket?: WebSocket;
  }
}

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  private socket?: WebSocket;
  private messageSubject = new BehaviorSubject<string>('');
  public message$ = this.messageSubject.asObservable();

  constructor() {
    this.connect();
  }

  private connect() {
    this.socket = new WebSocket('wss://ws.postman-echo.com/raw');

    this.socket.onopen = () => {
      console.log('WebSocket connected');
    };

    this.socket.onmessage = (event: MessageEvent) => {
      this.messageSubject.next(event.data);
    };

    this.socket.onerror = (error: Event) => {
      console.error('WebSocket error', error);
    };

    this.socket.onclose = () => {
      console.log('WebSocket closed');
    };
  }

  sendMessage(message: string) {
    if (this.socket!.readyState === WebSocket.OPEN) {
      this.socket!.send(message);
    } else {
      console.error('WebSocket not connected');
    }
  }
}
