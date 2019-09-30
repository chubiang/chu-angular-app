import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MsgFormValidationService } from '../services/msg-form-validation.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [MsgFormValidationService]
})
export class LoginComponent implements OnInit {
  hide = true;

  loginForm: any;

  inputArr = ['email', 'password'];

  getErrorMessage(type: string): string {
    let msg: string;
    this.inputArr.forEach(e => {
      if (type === e) {
        console.log('type', type);

        msg = this.msgFormValidationService.getValidMessage(this.loginForm.get(type).errors, type);
      }
    });
    return msg;
  }
  onSubmit() {
    console.warn(this.loginForm.value);
  }

  constructor(private msgFormValidationService: MsgFormValidationService,
              private formBuilder: FormBuilder) {
    this.loginForm = formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  ngOnInit() {
  }

}
