import { Component, OnInit, Input } from '@angular/core';
import { PageEvent } from '@angular/material';
import { Paginator } from './shared/board-footer.model';

@Component({
  selector: 'mpc-board-footer',
  templateUrl: './board-footer.component.html',
  styleUrls: ['./board-footer.component.scss']
})
export class BoardFooterComponent implements OnInit {

  @Input() page: Paginator;
  pageEvent: PageEvent;

  constructor() {}

  ngOnInit() {
  }

}
