import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ChatService } from 'src/app/services/chat.service';


@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})

export class PersonComponent {

  @Input() personName: string = '';

  messageForm = new FormGroup({
    message: new FormControl(''),
  })

  constructor(private chatService: ChatService) { }

  get buttonDisabled() {
    return this.messageForm.value.message?.trim() === '';
  }

  onSubmit() {
    if (!this.messageForm.value.message?.trim()) {
      return;
    }
    this.chatService.sendMessage({ sender: this.personName, message: this.messageForm.value.message });
    this.messageForm.reset();
  }

}
