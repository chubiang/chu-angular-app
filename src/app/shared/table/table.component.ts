import { TableService } from './table.service';
import { MatPaginator } from '@angular/material/paginator';
import { DataFormatPipe } from './../data-format.pipe';
import { isNumeric } from 'rxjs/util/isNumeric';
import { TableColumn, TableFooterColumn, DataFormatPipeModel } from './../data-format.model';
import { Component, OnInit, Input, ViewChild, Output, EventEmitter, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { Subscription } from 'rxjs';


@Component({
  selector: 'mpc-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  providers: [DataFormatPipe, TableService]
})
export class TableComponent implements OnInit {

  @Input() tblData: Array<any>;
  @Input() tblColumns: string[];
  @Input() tblColAttribute: Array<TableColumn>;
  @Input() tblFooter: Array<TableFooterColumn>;
  @Input() tblSelect: boolean;
  @Input() tblPageSize: number[];

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) matPaginator: MatPaginator;
  // custom
  @ViewChildren('tblRow') tblRow: QueryList<ElementRef>;

  dataSource = new MatTableDataSource<any>();
  selection = new SelectionModel<any>(true, []);
  dataFormatPipe: DataFormatPipe;
  tableService: TableService;
  subscription: Subscription;
  stickyRows: object = {};
  selectBoxWidth = 50;
  firstColLeftPad =  24;
  borderWidth = 1;
  defaultColWidth = 120;

  @Output() mpeDataSource: EventEmitter<MatTableDataSource<any>> =
    new EventEmitter<MatTableDataSource<any>>();

  @Output() mpeSelectedRows: EventEmitter<SelectionModel<any>> =
    new EventEmitter<SelectionModel<any>>();



  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  putSelectionRow() {
    this.mpeSelectedRows.emit(this.selection);
  }

  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }
  // footer 일때 값 합계 (숫자만 가능!)
  getDataSummary(col: string) {
    let colPipe: TableFooterColumn;
    const filterData = this.tblData.map((v) => {
      if (isNumeric(v[col])) {
        return Number(v[col]);
      }
    });
    this.tblFooter.map((v) => {
      if (v.name === col) {
        colPipe = v;
      }
    });
    if (filterData && colPipe && !filterData.includes(undefined)) {
      return this.dataFormatPipe.transform(
                      filterData.reduce((prev, current) =>
                                          prev + current, 0),
                                          new DataFormatPipeModel(colPipe.pipe.type,
                                                                  colPipe.pipe.format,
                                                                  colPipe.pipe.local));
    }
    return;
  }

  constructor(dataFormatPipe: DataFormatPipe, tableService: TableService) {
    this.dataFormatPipe = dataFormatPipe;
    this.tableService = tableService;
  }

  ngOnInit() {
    // select 활성화 시에
    if (this.tblSelect
          && !this.tblColAttribute.filter(v => v['name'] === 'select').length) {
      this.tblColumns.unshift('select');
      this.tblColAttribute.unshift({ name: 'select' });
    }
    // sticky 활성화 시에
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    this.subscription = this.tableService.changeStickyRows(this.tblColAttribute, this.tblSelect)
                          .subscribe(data => this.stickyRows = data);

    this.mpeDataSource.emit(this.dataSource);
    this.dataSource.data = this.tblData;
    this.dataSource.paginator = this.matPaginator;
    this.dataSource.sort = this.sort;
  }

}
