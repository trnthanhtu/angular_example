import { Component, OnInit } from '@angular/core';
import { MessageService } from "../message.service";

@Component({
  selector: 'app-message-new',
  templateUrl: './message-new.component.html',
  styleUrls: ['./message-new.component.css']
})
export class MessageNewComponent implements OnInit {

  constructor(private MessageService: MessageService) { }

  ngOnInit() {
  }
  onClickSubmit(data) {
    console.log(data)
      // alert("Entered Text : " + data.emailid);
    this.MessageService.addMessage(data).subscribe();
   }

}
