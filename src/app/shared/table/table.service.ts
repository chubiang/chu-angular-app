import { TableColumn } from './../data-format.model';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  private stickyRows = new BehaviorSubject({});

  selectBoxWidth = 50;
  firstColLeftPad =  24;
  borderWidth = 1;
  defaultColWidth = 120;

  changeStickyRows(tblColAttribute: Array<TableColumn>, tblSelect: boolean) {
    const rows = {};
    tblColAttribute.map((v, i, arr) => {
      let fw = i === 0 ? 0 : this.firstColLeftPad;
      if (v.sticky) {
        if (tblSelect && !rows['select'] && i === 1) {
            tblColAttribute[0].sticky = true;
            arr[i - 1]['width'] = this.selectBoxWidth;
            Object.assign(rows, {select: { sticky: true, width: this.selectBoxWidth, frontWidth: 0 }});
        }
        if (i > 0) {
          if (!arr[i - 1]['width']) {
            rows[arr[i - 1]['name']]['width'] = this.defaultColWidth;
            arr[i - 1]['width'] = this.defaultColWidth;
          }
          for (let index = 0; index < i; index++) {
            fw += (arr[index]['width'] + this.borderWidth);
            console.log(v.name, arr[index]['width'], fw, index);
          }
        }

        rows[v.name] = {
          sticky: v.sticky,
          width: v.width,
          frontWidth: fw
        };
      }
    });

    this.stickyRows.next(rows);

    return this.stickyRows.asObservable();
  }



  constructor() { }
}
