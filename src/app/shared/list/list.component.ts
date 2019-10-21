import { PaginatorService } from './../board-footer/shared/paginator.service';
import { ListService } from './shared/list.service';
import { Component, OnInit, Input } from '@angular/core';
import { Column } from './shared/list.model';

@Component({
  selector: 'mpc-list',
  styleUrls: ['./list.component.scss'],
  templateUrl: './list.component.html',
  providers: [ListService, PaginatorService]
})
export class ListComponent implements OnInit {

  @Input() icon: string;
  @Input() data: Array<any>; // list data
  @Input() columns: Array<Column>;
  @Input() header: boolean;

  listService: ListService;
  paginatorService: PaginatorService;

  constructor(listService: ListService) {
    this.listService = listService;
  }

  filter(data: any, filter: string, format?: string, local: string = `en-US`) {
    return this.listService.onFormatData(data, filter, format);
  }

  ngOnInit(): void { }


}
