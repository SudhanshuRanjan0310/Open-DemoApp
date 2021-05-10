import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input('image') image!: String | undefined;
  @Input('featureTitle') featureTitle!: String | undefined;
  @Input('featureDesc') featureDesc!: String | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
