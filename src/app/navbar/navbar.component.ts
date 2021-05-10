import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  menuItems: String[] = ['Products', 'Solutions', 'Pricing'];
  @HostBinding('class.sticky') makeSticky: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
