import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PopupModalComponent } from '../popup-modal/popup-modal.component';
import { PopupModalDeleteComponent } from '../popup-modal-delete/popup-modal-delete.component';
import { TruckService } from '../../services/truck.service';


@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.scss'],
})
export class MainSectionComponent implements OnInit {
  searchText;
  alltrucks;

  lat = 51.678418;
  lng = 7.809007;
  marker;
  selectedMarker;

  markers = [];

  constructor(
    private modalService: NgbModal,
    private truckService: TruckService
  ) { }

  addMarker(lat: number, lng: number, titl: string) {
    this.markers = [];
    this.markers.push({ lat, lng, label: titl, title: titl });
  }

  open() {
    const modalRef = this.modalService.open(PopupModalComponent, { size: 'sm' });
    modalRef.result.then((result) => {
      if (result) {
        this.truckService.addTruck(result);

      }
    });
  }


  remove(truckname: string): void {
    const modalRef = this.modalService.open(PopupModalDeleteComponent);
    modalRef.componentInstance.truckname = truckname;
  }

  ngOnInit(): void {
    this.alltrucks = this.truckService.getTrucks();
  }
}
