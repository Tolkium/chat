import { Component } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat-history',
  templateUrl: './chat-history.component.html',
  styleUrls: ['./chat-history.component.scss']
})
export class ChatHistoryComponent {

  chatMessages$ = this.chatService.chatMessagesPublic$;

  constructor(private chatService:ChatService) { }

  onClearMessages() {
    this.chatService.clearMessages();
  }

}
