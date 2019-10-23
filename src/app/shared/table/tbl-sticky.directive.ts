import { TableColumn } from './../data-format.model';
import { TableComponent } from './table.component';
import { Directive, ElementRef, Renderer2, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[mpdTblSticky]',
  providers: [TableComponent]
})
export class TblStickyDirective implements OnInit{

  @Input() mpdTblSticky: Array<TableColumn>;

  constructor(private el: ElementRef, private renderer: Renderer2) { }
  ngOnInit(): void {
    if (this.mpdTblSticky) {
      const uniqueClass = this.el.nativeElement.className.match(/(mat-column-[a-z])\w+/g);
      // console.log(uniqueClass);

      this.renderer.setStyle(this.el.nativeElement, 'position', 'sticky');
      this.renderer.setStyle(this.el.nativeElement, 'border-right', '1px solid #e0e0e0');
      this.renderer.setStyle(this.el.nativeElement, 'z-index', '1');
      this.renderer.setStyle(this.el.nativeElement, 'width', (this.mpdTblSticky['width']) + 'px');

      console.log(uniqueClass[0], this.mpdTblSticky['frontWidth']);
      this.renderer.setStyle(this.el.nativeElement, 'left', this.mpdTblSticky['frontWidth'] + 'px');
      if (this.el.nativeElement.nodeName !== 'TH') {
        this.renderer.setStyle(this.el.nativeElement, 'background-color', '#ffffff');
      }
    }
  }
}
