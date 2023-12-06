import { Component } from '@angular/core';
import { MessageDirectionEnum } from 'src/app/enums/message-direction-enum';
import { Chat } from 'src/app/models/chat.model';
import { AppStore } from 'src/app/stores/app.store';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.scss'],
})
export class ChatBoxComponent {
  public chat: Chat;
  public messageDirectionEnum = MessageDirectionEnum;

  constructor(private store: AppStore) {
    this.chat = this.store.chat;
  }
}
