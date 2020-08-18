import { PortfolioItem } from './../portfolio-item.model';
import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-portfolio-modal',
  templateUrl: './portfolio-modal.component.html',
  styleUrls: ['./portfolio-modal.component.scss']
})
export class PortfolioModalComponent implements OnInit {
  @Input() item: PortfolioItem;

  constructor(private modalService: NgbActiveModal) { }

  ngOnInit(): void {
  }

  closeModal(): void {
    this.modalService.close();
  }

}
