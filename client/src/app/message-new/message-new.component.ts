import { Component, OnInit } from '@angular/core';
import { MessageService } from "../message.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-message-new',
  templateUrl: './message-new.component.html',
  styleUrls: ['./message-new.component.css']
})
export class MessageNewComponent implements OnInit {

  constructor(private MessageService: MessageService,
              private router: Router) { }

  ngOnInit() {
  }

  onClickSubmit(data) {
    console.log(data)
      // alert("Entered Text : " + data.emailid);
    this.MessageService.addMessage(data).subscribe(
     (response) => {
              if (response.status === 200) {
                this.router.navigate(['/messages']);
              } else {
                  console.log(response);
              }
          },
          (error) => {
              console.log(error);
      });
   }

}
