import { Component, OnInit } from '@angular/core';
import { MessageService } from "../message.service";

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {

  constructor(private MessageService: MessageService) { }

  items: any[];

  ngOnInit() {
    this.loadListMessage();
  }

  loadListMessage() {
    this.MessageService.fetch()
      .subscribe((data) => {
          this.items = data;
      });
  }

}