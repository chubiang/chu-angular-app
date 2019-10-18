import { ListService } from './../shared/list/shared/list.service';
import { Subscription } from 'rxjs';
import { PageEvent } from '@angular/material';
import { PaginatorService } from './../shared/board-footer/shared/paginator.service';
import { Paginator, DEF_PAGE_SIZE, DEF_PAGE_SIZE_OPTIONS } from './../shared/board-footer/shared/board-footer.model';
import { MOCK_LIST_DATA, MOCK_LIST_COLUMN } from './shared/mock-list';
import { Column } from '../shared/list/shared/list.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'page-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  providers: [PaginatorService]
})
export class MainComponent implements OnInit {

  data: Array<any>;
  original: Array<any>;
  columns: Array<Column>;
  paginator: Paginator;
  listService: ListService;
  paginatorService: PaginatorService;
  subscription: Subscription;

  constructor(listService: ListService, paginatorService: PaginatorService) {
    this.paginatorService = paginatorService;
    this.listService = listService;
  }

  setListData(data: Array<any>) {
    this.listService.setListData(data);
  }

  setDataOfPageIndex(pageEvent: PageEvent) {
    this.paginator.pageSize = this.paginator.length;
    this.paginatorService.setDataOfPageIndex(pageEvent, this.original);
    this.putDataOnList();
  }

  onSearch() {
    this.paginator.pageSize = this.paginator.length;
    this.paginatorService.initData(this.paginator, this.original);
    this.putDataOnList();
  }

  putDataOnList() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    this.subscription = this.paginatorService.getDataOfPageIndex().subscribe({
      next: (v) => {
        this.data = v;
      }
    });
  }

  ngOnInit() {
    this.original = MOCK_LIST_DATA;
    this.columns = MOCK_LIST_COLUMN;
    this.paginator = {
      pageIndex: 0,
      length: MOCK_LIST_DATA.length,
      pageSize: DEF_PAGE_SIZE,
      pageSizeOptions: DEF_PAGE_SIZE_OPTIONS
    };
  }

}
