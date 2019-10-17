import { Component, OnInit, Input } from '@angular/core';
import { formatDate, formatNumber } from '@angular/common';
import { Column } from './shared/list.model';

@Component({
  selector: 'mpc-list',
  styleUrls: ['./list.component.scss'],
  templateUrl: './list.component.html',
})
export class ListComponent implements OnInit {

  @Input() icon: string;
  @Input() data: Array<any>;
  @Input() columns: Array<Column>;
  @Input() header: boolean;
  subTitle: object;

  onFilterData(data: any, filter: string, format?: string, local: string = `en-US`) {
    if (filter) {
      if (filter === 'number') {
        return formatNumber(data, local, (format ? format : undefined));
      } else if (filter === 'date') {
        return formatDate(data, (format ? format : 'yyyy/MM/dd'), local);
      }
    }
    return data;
  }


  constructor() {}

  ngOnInit() {
  }

}
