import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog'; 

import { MsgFormValidationService } from '../services/msg-form-validation.service'
import { SuccessDialog } from '../dialog/success-dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [MsgFormValidationService]
})
export class LoginComponent implements OnInit {
  hide = true;
  data: object;
  loginForm: any;

  inputArr = ['email', 'password'];

  dlg: object = {
    title: 'Sign In',
    content: 'Welcome!!'
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(SuccessDialog, {
      width: '250px',
      data: this.dlg
    });
  }

  getErrorMessage(type: string): string {
    let msg: string;
    this.inputArr.forEach(e => {
      if (type === e) {
        msg = this.msgFormValidationService.getValidMessage(this.loginForm.get(type).errors, type);
      }
    });
    return msg;
  }
  onSubmit() {
    console.warn(this.loginForm.value);
    this.data = this.loginForm.value;
    if (this.data) {
      this.openDialog();
    }
  }

  constructor(private msgFormValidationService: MsgFormValidationService,
              private formBuilder: FormBuilder,
              public dialog: MatDialog) {
    this.loginForm = formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  ngOnInit() {
  }

}
