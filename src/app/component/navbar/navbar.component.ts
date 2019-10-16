import { Component, EventEmitter, Output } from '@angular/core';
import { Menu } from './shared/navbar.model';

export const Menus: Array<Menu> = [{ title: 'Sign In', herf: 'login' },
                        { title: 'Main', herf: 'main' }];

@Component({
  selector: 'mpc-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  menus: Array<Menu>;

  constructor() {
    this.menus = Menus;
  }

  @Output() mpeMenuTitle: EventEmitter<string> = new EventEmitter<string>();
}
