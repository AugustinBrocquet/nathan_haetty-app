import { Component, OnInit } from '@angular/core';
import { MessagesService } from 'src/app/shared/services/messages/messages.service';
import { Router } from '@angular/router';
import { Message } from 'src/app/shared/interfaces/message';
import * as BalloonEditor from '@ckeditor/ckeditor5-build-balloon';

@Component({
  selector: 'app-messages-list',
  templateUrl: './messages-list.component.html',
  styleUrls: ['./messages-list.component.scss']
})
export class MessagesListComponent implements OnInit {

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      messageId: {
        title: 'ID',
        type: 'number',
      },
      /*firstname: {
        title: 'Prénom',
        type: 'string',
      },
      lastname: {
        title: 'Nom',
        type: 'string',
      },*/
      content: {
        title: 'Contenu',
        type: 'string',
      }
    },
  };

  public Editor = BalloonEditor;
  public editorConfig = {
    placeholder: 'Type the content here!',
  };

  public messages: Message[] = [];

  constructor(private router: Router, private messagesService: MessagesService) { }

  goToViewMessage(event): void {
    console.log(event);
    console.log(`message/${event.data.messageId}`);
    // this.router.navigate([`/admin/user/${event.data.userId}`]);
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
      console.log(this.messages);
    });
  }

}
