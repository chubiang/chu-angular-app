import { formatNumber, formatDate } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  onFormatData(data: any, type: string, format?: string, local: string = `en-US`) {
    if (type) {
      if (typeof data === 'number' && type === 'number') {
        return formatNumber(data, local, (format ? format : undefined));
      } else if (typeof data === 'object' && type === 'number') {
        return formatDate(data, (format ? format : 'yyyy/MM/dd'), local);
      }
    }
    return data;
  }

  constructor() { }
}
