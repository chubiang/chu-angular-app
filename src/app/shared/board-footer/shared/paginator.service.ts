import { Paginator } from './board-footer.model';
import { PageEvent } from '@angular/material';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaginatorService {

  data: BehaviorSubject<any[]> = new BehaviorSubject([]);

  setDataOfPageIndex(pageEvent: PageEvent, data: Array<any>, sliceData: boolean = true): void {
    if (sliceData) {
      this.data.next(data.filter((o, i) => (i >= pageEvent.pageIndex * pageEvent.pageSize
                              && i < (pageEvent.pageIndex + 1) * pageEvent.pageSize )));
    } else {
      this.data.next(data);
    }
  }

  initData(paginator: Paginator, data: Array<any>, sliceData: boolean = true) {
    if (sliceData) {
      this.data.next(data.filter((o, i) => (i >= paginator.pageIndex * paginator.pageSize
                              && i < (paginator.pageIndex + 1) * paginator.pageSize )));
    } else {
      this.data.next(data);
    }
  }

  getDataOfPageIndex(): Observable<any[]> {
    return this.data.asObservable();
  }

  constructor() {
  }

}
