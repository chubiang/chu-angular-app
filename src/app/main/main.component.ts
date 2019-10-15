import { Column, ColElemStyle } from './../board/board.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }

  data: Array<any>;
  columns: Array<Column>;
  colStyle: ColElemStyle = {
    cell: { width: '120px', display: 'flex', 'justify-content': 'center' },
    content: { 'font-size': '15px', 'font-weight': '500' },
    subContent: { 'font-size': '12px', 'text-align': 'right' }
  };

  ngOnInit() {
    this.data = [{username: 'cino', email: 'cde@email.com', age: 23, cash: 500000000, lastSignIn: new Date('20191011')},
    {username: 'annie', email: 'abc@email.com', age: 35, cash: 500000000, lastSignIn: new Date('20191011')},
    {username: 'flobar', email: 'fig@email.com', age: 18, cash: 500000000, lastSignIn: new Date('20191011')},
    {username: 'hammer', email: 'hmn@email.com', age: 21, cash: 500000000, lastSignIn: new Date('20191011')},
    {username: 'sophia', email: 'sop@email.com', age: 27, cash: 500000000, lastSignIn: new Date('20191011')},
    {username: 'quartz', email: 'qrz@email.com', age: 29, cash: 500000000, lastSignIn: new Date('20191011')}];

    this.columns = [{name: 'username', style: this.colStyle },
    {name: 'email', style: this.colStyle},
    {name: 'age', style: this.colStyle },
    {name: 'cash', filter: 'number', style: this.colStyle },
    {name: 'lastSignIn', filter: 'date', style: this.colStyle }];
  }

}
