import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.sass']
})
export class MessagesComponent implements OnInit {

  constructor(private messageService: MessageService) { }

  ngOnInit() {
  }

  // everytime the button is clicked, this method is called.
  getMessages(): string[] {
    return this.messageService.messages
  }

  clear() {
    this.messageService.clear()
  }
}
