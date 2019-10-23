import { TableColumn, TableFooterColumn } from './../shared/data-format.model';
import { ListService } from './../shared/list/shared/list.service';
import { Subscription } from 'rxjs';
import { PageEvent, MatTableDataSource } from '@angular/material';
import { PaginatorService } from './../shared/board-footer/shared/paginator.service';
import { Paginator, DEF_PAGE_SIZE, DEF_PAGE_SIZE_OPTIONS } from './../shared/board-footer/shared/board-footer.model';
import { MOCK_LIST_DATA, MOCK_LIST_COLUMN, MOCK_TABLE_COLUMN, MOCK_TABLE_COLUMN_PIPE, MOCK_TABLE_COLUMN_FOOTER } from './shared/mock-list';
import { Column } from '../shared/list/shared/list.model';
import { Component, OnInit } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'page-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  providers: [PaginatorService]
})
export class MainComponent implements OnInit {
  // list
  data: Array<any>;
  original: Array<any>;
  columns: Array<Column>;
    // table
  tblData: Array<any>;
  tblColumns: string[];
  tblColAttribute: Array<TableColumn>;
  tblFooter: Array<TableFooterColumn>;
  tblPageSize: number[];
  dataSource: MatTableDataSource<any>;
  selection: SelectionModel<any>;

  paginator: Paginator;
  listService: ListService;
  paginatorService: PaginatorService;
  subscription: Subscription;
  subscription2: Subscription;

  constructor(listService: ListService, paginatorService: PaginatorService) {
    this.paginatorService = paginatorService;
    this.listService = listService;
  }

  setDataOfPageIndex(pageEvent: PageEvent) {
    this.paginatorService.setDataOfPageIndex(pageEvent, this.original);
    this.putDataOnList();
  }

  onSearch() {
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
  // 테이블 페이징 정보 추출용
  getTableDataSource(dataSource: MatTableDataSource<any>) {
    this.dataSource = dataSource;
  }
  // 선택한 row 추출용
  getTableSelection(selection: SelectionModel<any>) {
    this.selection = selection;
  }

  ngOnInit() {
    this.original = MOCK_LIST_DATA;
    this.columns = MOCK_LIST_COLUMN;
    this.tblData = MOCK_LIST_DATA;
    this.tblFooter = MOCK_TABLE_COLUMN_FOOTER;
    this.tblColumns = MOCK_TABLE_COLUMN;
    this.tblColAttribute = MOCK_TABLE_COLUMN_PIPE;
    this.tblPageSize = [5, 10, 20, 100];
    this.paginator = {
      pageIndex: 0,
      length: MOCK_LIST_DATA.length,
      pageSize: DEF_PAGE_SIZE,
      pageSizeOptions: DEF_PAGE_SIZE_OPTIONS
    };
  }

}
