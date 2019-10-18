import { PaginatorService } from './../../board-footer/shared/paginator.service';
import { Observable } from 'rxjs';
import { formatNumber, formatDate } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListService {

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

  setListData(data: Array<any>) {

  }

  constructor() { }
}
