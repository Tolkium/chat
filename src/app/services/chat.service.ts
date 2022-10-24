import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ChatMessage } from '../models/types';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private personList$: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
  public personListPublic$ = this.personList$.asObservable();

  private chatMessages$: BehaviorSubject<ChatMessage[]> = new BehaviorSubject<ChatMessage[]>([]);
  public chatMessagesPublic$ = this.chatMessages$.asObservable();

  public addPerson() {
    let index = this.personList$.getValue().length + 1;
    if (index > 9) {
      return;
    }
    this.personList$.next([...this.personList$.getValue(), 'Person ' + index]);
  }

  public sendMessage(message: ChatMessage) {
    this.chatMessages$.next([...this.chatMessages$.getValue(), message]);
  }

  public clearMessages() {
    this.chatMessages$.next([]);
  }

}