import { MatPaginator } from '@angular/material/paginator';
import { DataFormatPipe } from './../data-format.pipe';
import { isNumeric } from 'rxjs/util/isNumeric';
import { TableColumn, TableFooterColumn, DataFormatPipeModel } from './../data-format.model';
import { TableService } from './shared/table.service';
import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';


@Component({
  selector: 'mpc-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  providers: [TableService, DataFormatPipe]
})
export class TableComponent implements OnInit {

  @Input() tblData: Array<any>;
  @Input() tblColumns: string[];
  @Input() tblPipe: Array<TableColumn>;
  @Input() tblFooter: Array<TableFooterColumn>;
  @Input() tblSelect: boolean;
  @Input() tblPageSize: number[];

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) matPaginator: MatPaginator;

  selection = new SelectionModel<any>(true, []);
  tableService: TableService;
  dataFormatPipe: DataFormatPipe;

  dataSource = new MatTableDataSource<any>();

  @Output() mpeDataSource: EventEmitter<MatTableDataSource<any>> =
    new EventEmitter<MatTableDataSource<any>>();

  // TODO: 선택한 값 무엇인지 내보내기
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

  constructor(tableService: TableService, dataFormatPipe: DataFormatPipe) {
    this.tableService = tableService;
    this.dataFormatPipe = dataFormatPipe;
  }

  ngOnInit() {
    // select 활성화 시에
    if (this.tblSelect) {
      this.tblColumns.unshift('select');
      this.tblPipe.unshift({name: 'select'});
    }
    this.mpeDataSource.emit(this.dataSource);
    this.dataSource.data = this.tblData;
    this.dataSource.paginator = this.matPaginator;
    this.dataSource.sort = this.sort;
  }

}
