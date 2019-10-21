import { formatDate, formatNumber } from '@angular/common';
import { DataFormatPipeModel } from './data-format.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataFormatPipe'
})

export class DataFormatPipe implements PipeTransform {
  transform(data: any, dataFormat: DataFormatPipeModel): any {
    console.log(data, dataFormat);
    if(!dataFormat.local) {
      dataFormat.local = `en_US`;
    }
    if (dataFormat.type === 'number') {
      return formatNumber(data, dataFormat.local,
        (dataFormat.format ? dataFormat.format : undefined));
    } else if (dataFormat.type === 'date') {
      return formatDate(data,
        (dataFormat.format ? dataFormat.format : 'yyyy/MM/dd'), dataFormat.local);
    }
    return data;
  }
}
