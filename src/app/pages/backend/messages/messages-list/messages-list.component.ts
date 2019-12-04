import { Component, OnInit } from '@angular/core';
import { MessagesService } from 'src/app/shared/services/messages/messages.service';
import { Router } from '@angular/router';
import { Message } from 'src/app/shared/interfaces/message';

@Component({
  selector: 'app-messages-list',
  templateUrl: './messages-list.component.html',
  styleUrls: ['./messages-list.component.scss']
})
export class MessagesListComponent implements OnInit {
//  public Editor = BalloonEditor;
  public editorConfig = {
  };
  settings = {
    actions: {
      add: false
    },
    columns: {
      messageId: {
        title: 'ID',
        type: 'number',
      },
      content: {
        title: 'Contenu',
        type: 'string',
      }
    },
  };

  public messages: Message[] = [];
  constructor(private router: Router, private messagesService: MessagesService) { }

  goToViewMessage(event): void {
    this.router.navigate([`/admin/message/${event.data.messageId}`]);
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  ngOnInit() {
    this.messagesService.getMessages().subscribe((data: any) => {
      this.messages = data.map((elem) => {
        return {
          messageId: elem._id,
          ...elem
        };
      });
    });
  }
}
