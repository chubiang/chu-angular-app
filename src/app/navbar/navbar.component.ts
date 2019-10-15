import { Component, EventEmitter, Output } from '@angular/core';

// tslint:disable-next-line: class-name
interface menu {
  title: string;
  herf: string;
}

@Component({
  selector: 'app-navbar',
  // tslint:disable-next-line: no-outputs-metadata-property
  outputs: ['menuTitle'],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor() {}

  menus: Array<menu> = [{title: 'Sign In', herf: 'login'},
                        {title: 'Main', herf: 'main'}];

  // tslint:disable-next-line: no-output-rename
  @Output() menuTitle: EventEmitter<string> = new EventEmitter<string>();
}
