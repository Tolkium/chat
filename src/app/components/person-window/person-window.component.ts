import { Component } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-person-window',
  templateUrl: './person-window.component.html',
  styleUrls: ['./person-window.component.scss']
})
export class PersonWindowComponent {

  personList$= this.chatService.personListPublic$;

  constructor(private chatService: ChatService) {}

}
