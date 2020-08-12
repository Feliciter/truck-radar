import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PopupModalComponent } from '../popup-modal/popup-modal.component';
import { Truck } from '../../model/truck';

@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.scss'],
})
export class MainSectionComponent implements OnInit {
  TRUCK_DATA: Truck[] = [
    { truckname: 'Truck 001', latitude: 20, longitude: 30 },
    { truckname: 'Truck 002', latitude: 22, longitude: 34 },
    { truckname: 'Truck 003', latitude: 28, longitude: 78 },
  ];

  constructor(private modalService: NgbModal) {}

  open() {
    const modalRef = this.modalService.open(PopupModalComponent);

    modalRef.result.then((result) => {
      if (result) {
        this.TRUCK_DATA.push(result);
      }
    });
  }

  // TO DO
  // if (window.confirm("Are you sure")) { }

  remove(truckname): void {
    const index: number = this.TRUCK_DATA.findIndex(
      (i) => i.truckname === truckname
    );

    console.log(index);
    if (index !== -1) {
      this.TRUCK_DATA.splice(index, 1);
    }
  }

  ngOnInit(): void {}
}
