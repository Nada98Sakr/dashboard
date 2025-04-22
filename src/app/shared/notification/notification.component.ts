import { Component, OnInit, OnDestroy } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { WebSocketService } from '../../core/services/websocket.service';

@Component({
  selector: 'app-notification',
  template: `
    <button class="fixed bottom-20 end-6 z-50 cursor-pointer" (click)="sendMessage()">
        <img src="assets/icons/customer-service-support-svgrepo-com.svg" alt="Support" width="50" height="50">
    </button>
  `,
})
export class NotificationComponent implements OnInit, OnDestroy {
  private messageSubscription: any;

  constructor(
    private webSocketService: WebSocketService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.messageSubscription = this.webSocketService.message$.subscribe((message: string) => {
      if (message) {
        this.showNotification(message);
      }
    });
  }

  ngOnDestroy() {
    if (this.messageSubscription) {
      this.messageSubscription.unsubscribe();
    }
  }

  private showNotification(message: string) {
    this.toastr.info(message, 'New WebSocket Message');
  }

  sendMessage() {
    const message = 'Hello, WebSocket!';
    this.webSocketService.sendMessage(message);
    this.toastr.success('Message sent!');
  }
}
