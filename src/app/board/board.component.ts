import { Component, OnInit, Input } from '@angular/core';

export interface Column {
  name: string;
  subContent?: string;
  filter?: string;
  style?: ColElemStyle;
  styleClass?: ColElemStyle;
}

export interface ColElemStyle {
  cell: any;
  content: any;
  subContent?: any;
}

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  @Input() listIcon: string;
  @Input() data: Array<any>;
  @Input() columns: Array<Column>;

  subTitle: object;

  constructor() {}

  ngOnInit() {
  }

}
