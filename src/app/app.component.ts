import { MenuService } from './navbar/shared/menu.service';
import { Component, OnDestroy } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subscription } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MenuService]
})
export class AppComponent implements OnDestroy {

  menuTitle: string;
  subscription: Subscription;

  constructor(private breakpointObserver: BreakpointObserver, private menuService: MenuService) {
    // 초기값
    this.subscription = this.menuService.getTitle().subscribe(title => { this.menuTitle = title; });
  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  changeTitle(title: string) {
    this.menuService.setTitle(title);
    this.subscription = this.menuService.getTitle().subscribe(x => { this.menuTitle = x; });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}

