import { TableColumn } from './../data-format.model';
import { TableService } from './shared/table.service';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';

@Component({
  selector: 'mpc-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  providers: [TableService]
})
export class TableComponent implements OnInit {

  @Input('tblData') tblData: Array<any>;
  @Input('tblColumns') tblColumns: string[];
  @Input('tblPipe') tblPipe: Array<TableColumn>;

  @ViewChild('matSort', {static: false}) sort: MatSort;
  tableService: TableService;

  dataSource = new MatTableDataSource<any>();

  constructor(tableService: TableService) {
    this.tableService = tableService;
  }

  ngOnInit() {
    console.log(this.dataSource);
    this.dataSource.data = this.tblData;
    console.log(this.tblColumns, this.tblData);
  }

}
