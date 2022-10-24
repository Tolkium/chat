import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.scss']
})

export class ChatPageComponent implements OnInit {

  constructor(private chatService :ChatService ) {}

  ngOnInit(): void {
  }

  onAddPerson() {
    this.chatService.addPerson();
  }

}