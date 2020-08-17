import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-portfolio-item',
  templateUrl: './portfolio-item.component.html',
  styleUrls: ['./portfolio-item.component.scss']
})
export class PortfolioItemComponent implements OnInit {
  @Input() item: any;
  isTextVisible: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
