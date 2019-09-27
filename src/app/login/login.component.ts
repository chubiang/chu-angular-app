import { Component, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective, FormControl, NgForm, Validators } from '@angular/forms';
import { MyErrorStateMatcherService } from '../services/my-error-state-matcher.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [MyErrorStateMatcherService]
})
export class LoginComponent implements OnInit {
  hide = true;
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  getErrorMessage() {
    console.log(this.errorStateMatcherService.isErrorState);
    if (this.loginForm.get('email').invalid) {
      return 'Email Required!';
    }
  }
  onSubmit() {
    console.warn(this.loginForm.value);
  }

  constructor(private errorStateMatcherService: MyErrorStateMatcherService) { }

  ngOnInit() {
  }

}
