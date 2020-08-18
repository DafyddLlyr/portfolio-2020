import { PortfolioItem } from './../portfolio-item.model';
import { PortfolioModalComponent } from './../portfolio-modal/portfolio-modal.component';
import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-portfolio-item',
  templateUrl: './portfolio-item.component.html',
  styleUrls: ['./portfolio-item.component.scss']
})
export class PortfolioItemComponent implements OnInit {
  @Input() item: any;
  isTextVisible: boolean = false;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  openPortfolioModal(item: PortfolioItem): void {
    const modalRef = this.modalService.open(PortfolioModalComponent, { size: 'lg' });
    modalRef.componentInstance.item = item;
  }

}
