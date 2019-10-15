import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubTitleService {

  private subTitle = new BehaviorSubject('Sign In');

  setTitle(title: string) {
    this.subTitle.next(title);
  }

  getTitle(): Observable<any> {
    return this.subTitle.asObservable();
  }
}
