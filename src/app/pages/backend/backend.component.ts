import { Component } from '@angular/core';

import { MENU_ITEMS } from './backend-menu';

@Component({
  selector: 'ngx-admin',
  styleUrls: ['backend.component.scss'],
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class BackendComponent {

  constructor(){

  }

  menu = MENU_ITEMS;
}
