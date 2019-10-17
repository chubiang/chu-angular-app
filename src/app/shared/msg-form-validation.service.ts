import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MsgFormValidationService {

  getValidMessage(errors: object, type: string): string {
    let msg = '';
    if (errors && type) {
      if (type === 'email') {
        msg = errors.hasOwnProperty('required') ? 'Email Required!' : '';
        msg = errors.hasOwnProperty('email') ? 'Please enter a valid email address.' : msg;
      }
      if (type === 'password') {
        msg = errors.hasOwnProperty('required') ? 'Password Required!' : '';
      }
    }
    return msg;
  }
}
