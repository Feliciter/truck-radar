import { Component, OnInit } from '@angular/core';

import {NgbModal, NgbActiveModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { PopupModalComponent } from '../popup-modal/popup-modal.component';


@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.scss']
})
export class MainSectionComponent implements OnInit {

  title = 'app';
  truck 
  long
  alt
  
    constructor(private modalService: NgbModal) {}
  
    open() {
      // const modalRef = this.modalService.open(ModalComponent);
      const modalRef = this.modalService.open(PopupModalComponent );
      modalRef.componentInstance.truck = 'MAZ';
      modalRef.componentInstance.long = '63.56';
      modalRef.componentInstance.alt= '12.23';
  
  
    }

  ngOnInit(): void {
  }

}
