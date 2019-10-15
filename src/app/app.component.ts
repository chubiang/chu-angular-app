import { SubTitleService } from './services/sub-title.service';
import { Component, OnDestroy } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subscription } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [SubTitleService]
})
export class AppComponent implements OnDestroy {

  menuTitle: string;
  subscription: Subscription;

  constructor(private breakpointObserver: BreakpointObserver, private subTitleService: SubTitleService) {
    // 초기값
    this.subscription = this.subTitleService.getTitle().subscribe(title => { this.menuTitle = title; });
  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  changeTitle(title: string) {
    this.subTitleService.setTitle(title);
    this.subscription = this.subTitleService.getTitle().subscribe(x => { this.menuTitle = x; });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}

