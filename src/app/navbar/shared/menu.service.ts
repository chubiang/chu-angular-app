import { Menus } from '../navbar.component';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  strData = '';

  private subTitle = new BehaviorSubject(this.strData);

  constructor() {
    Menus.forEach(m => {
      if (window.location.href.match(m.herf)) {
        this.strData = m.title;
        this.setTitle(this.strData);
      } else {
        this.setTitle('Sign In');
      }
    });
  }

  setTitle(title: string) {
    this.subTitle.next(title);
  }

  getTitle(): Observable<any> {
    return this.subTitle.asObservable();
  }
}
