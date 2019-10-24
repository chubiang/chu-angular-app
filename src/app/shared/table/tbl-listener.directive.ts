import { TableComponent } from './table.component';
import { Directive, Input, OnChanges, SimpleChanges, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[mpdTblListener]',
  providers: [TableComponent]
})
export class TblListenerDirective implements OnChanges {
  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @Input() mpdTblListener: object;
  // 기본너비 | width 미입력 시에
  defaultColWidth = 120;

  changeStyles(childes: object) {
    for (const key in childes) {
      if (childes.hasOwnProperty(key)) {
        // 특정 셀 클래스이름 뽑아오기
        const uniqueClass = childes[key].className.match(/(mat-column-[a-z])\w+/g);

        if (uniqueClass) {
          const colName = uniqueClass[0].replace('mat-column-', '');
          if (this.mpdTblListener[colName]) {
            this.renderer.setStyle(childes[key], 'position', 'sticky');
            this.renderer.setStyle(childes[key], 'z-index', '1');
            this.renderer.setStyle(childes[key], 'left', this.mpdTblListener[colName]['frontWidth'] + 'px');

            const width =  this.mpdTblListener[colName]['width'];
            this.renderer.setStyle(childes[key], 'min-width', (!width ? this.defaultColWidth : width) + 'px');
            this.renderer.setStyle(childes[key], 'width', (!width ? this.defaultColWidth : width) + 'px');
          }
        }
      }
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.el, this.el.nativeElement.offsetParent.childNodes);
    const parentChildNodes = this.el.nativeElement.offsetParent.childNodes;
    if (parentChildNodes) {
      // header용
      const headerChilds: object = this.el.nativeElement.offsetParent.children[0].children[0].children;
      this.changeStyles(headerChilds);
      if (parentChildNodes.length > 2) {
        // footer용
        const footerChilds = this.el.nativeElement.offsetParent.children[2].children[0].children;
        this.changeStyles(footerChilds)
      }
    }
  }

}
