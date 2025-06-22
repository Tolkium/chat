import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.scss']
})

export class ChatPageComponent implements OnInit {

  constructor(
    private chatService: ChatService,
    public themeService: ThemeService
  ) {}

  ngOnInit(): void {
  }

  onAddPerson() {
    this.chatService.addPerson();
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

}
