import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { MessageListComponent } from './message-list/message-list.component';
import { MessageService } from './message.service';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { MessageNewComponent } from './message-new/message-new.component';
import { Router, NavigationEnd } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    MessageListComponent,
    MessageNewComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
        {
            path: 'messages',
            component: MessageListComponent
         },
        {
            path: 'messages-new',
            component: MessageNewComponent
         }
    ])
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
