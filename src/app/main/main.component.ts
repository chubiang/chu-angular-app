import { MOCK_LIST_DATA, MOCK_LIST_COLUMN } from './shared/mock-list';
import { Column } from '../shared/list/shared/list.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'page-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() {}

  data: Array<any>;
  columns: Array<Column>;

  ngOnInit() {
    this.data = MOCK_LIST_DATA;
    this.columns = MOCK_LIST_COLUMN;
  }

}
