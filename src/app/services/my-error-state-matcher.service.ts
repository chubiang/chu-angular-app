import { Injectable } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { FormGroup, FormGroupDirective, FormControl, NgForm, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class MyErrorStateMatcherService implements ErrorStateMatcher {

  getValidMessage(control: FormControl | null) {

  }
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    console.log(control);

    return !!(control && control.invalid
      && (control.dirty || control.touched || isSubmitted));
  }
  constructor() { }
}
