import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
    title: string;
    content: string;
}

@Component({
    selector: 'success-dialog',
    templateUrl: './success-dialog.html',
    styleUrls: ['./success-dialog.scss'],
})
export class SuccessDialog {

    dlgSend: string;
    
    constructor(
        public dialogRef: MatDialogRef<SuccessDialog>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

    // onNoClick(): void {
    //     this.dialogRef.close();
    // }
}