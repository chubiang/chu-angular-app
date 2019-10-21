import { Paginator, DEF_PAGE_SIZE, DEF_PAGE_SIZE_OPTIONS } from './shared/board-footer.model';
import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { PageEvent } from '@angular/material';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'mpc-board-footer',
  templateUrl: './board-footer.component.html',
  styleUrls: ['./board-footer.component.scss']
})
export class BoardFooterComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) matPaginator: MatPaginator;

  @Input('paginator') paginator: Paginator;
  @Output() mpePageEvent: EventEmitter<PageEvent> = new EventEmitter<PageEvent>();

  ngOnInit() {
    console.log(this.matPaginator, this.paginator);
    if (!this.paginator) {
      this.paginator.pageSize = DEF_PAGE_SIZE;
      this.paginator.pageSizeOptions = DEF_PAGE_SIZE_OPTIONS;
    }
  }

}
