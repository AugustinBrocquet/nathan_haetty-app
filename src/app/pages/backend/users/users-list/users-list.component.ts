import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/shared/services/users/users.service';
import { InvalidTokenComponent } from '../../auth/reset-password/invalid-token/invalid-token.component';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  settings = {
    actions: {
      edit: false
    },
    add: {
      confirmCreate: true,
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
      username: {
        title: 'Utilisateur',
        type: 'string',
      },
      firstname: {
        title: 'Prénom',
        type: 'string',
      },
      lastname: {
        title: 'Nom',
        type: 'string',
      },
      email: {
        title: 'E-mail',
        type: 'string',
      },
      password: {
        title: 'Password',
        type: 'string',
      },
    },
  };

  public users: any[] = [];

  constructor(private router: Router, private usersService: UsersService) {

  }

  goToViewUser(event): void {
    this.router.navigate([`/admin/user/${event.data.userId}`]);
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Voulez vous vraiment supprimer l\'utilisateur ?')) {
      this.usersService.deleteUser(event.data.userId).subscribe((resp) => {
        event.confirm.resolve();
        alert('Utilisateur supprimé');
      });

    } else {
      event.confirm.reject();
    }
  }

  onCreateConfirm(event) {
    if (window.confirm('Are you sure you want to create this user ?')) {
      const user = {
        username: event.newData.username,
        firstname: event.newData.firstname,
        lastname: event.newData.lastname,
        email: event.newData.email,
        password: event.newData.password
      }
      this.usersService.createUser(user).subscribe((response) => {
        console.log(response)
      })
      event.confirm.resolve(user)
    } else {
      event.confirm.reject();
    }
  }

  ngOnInit() {
    this.usersService.getUsers().subscribe((data: any) => {
      this.users = data.map((elem) => {
        return {
          userId: elem._id,
          ...elem
        };
      });
    });
  }
}
