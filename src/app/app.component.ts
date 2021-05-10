import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { ScrollSpyService } from 'ngx-scrollspy';
import { Subscription } from 'rxjs';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy, AfterViewInit{
  windowStream!: Subscription;
  scrollTop!: number;

  @ViewChild(NavbarComponent, { static: false }) navbar!: NavbarComponent;

  constructor(
    private scrollSpy: ScrollSpyService,
    private el: ElementRef
  ) { }

  changeNavBarStyle(makeSticky: boolean) {
    this.navbar.makeSticky = makeSticky;
  }

  ngAfterViewInit() {
    this.windowStream = this.scrollSpy.getObservable('window').subscribe(() => {
      this.scrollTop = window ? window.pageYOffset : 0;
      this.scrollTop > 50 ? this.changeNavBarStyle(true) : this.changeNavBarStyle(false);
    });
  }

  ngOnDestroy() {
    this.windowStream.unsubscribe();
  }
}
