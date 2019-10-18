import { Paginator } from './shared/board-footer.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'mpc-board-footer',
  templateUrl: './board-footer.component.html',
  styleUrls: ['./board-footer.component.scss']
})
export class BoardFooterComponent implements OnInit {

  @Input('paginator') paginator: Paginator;
  @Output() mpePageEvent: EventEmitter<PageEvent> = new EventEmitter<PageEvent>();

  ngOnInit() {

  }

}
