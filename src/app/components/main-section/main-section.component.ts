import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PopupModalComponent } from '../popup-modal/popup-modal.component';
import { PopupModalDeleteComponent } from '../popup-modal-delete/popup-modal-delete.component';


import { TruckService } from '../../services/truck.service';
import { Truck } from '../../model/truck';

@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.scss'],
})


export class MainSectionComponent implements OnInit {

  searchText;
  alltrucks;

  ///TO DELETE
  title = 'My first AGM project';
  lat = 51.678418;
  lng = 7.809007;
  marker
  selectedMarker;

  markers = [
    // These are all just random coordinates from https://www.random.org/geographic-coordinates/
    { lat: 22.334, lng: 105.64, alpha: 1 },
    { lat: 7.92658, lng: -12.05228, alpha: 1 },
    { lat: 48.75606, lng: -118.859, alpha: 1 },
    { lat: 5.19334, lng: -67.03352, alpha: 1 },
    { lat: 12.09407, lng: 26.31618, alpha: 1 },
    { lat: 47.92393, lng: 78.58339, alpha: 1 }
  ];

  ///TO DELETE

  constructor(
    private modalService: NgbModal,
    private truckService: TruckService

  ) { }

  addMarker(lat: number, lng: number) {
    this.markers = [];
    console.log(`addMarker ${lat} ${lng}`)
    this.markers.push({ lat, lng, alpha: 0.4 });
  }




  open() {
    const modalRef = this.modalService.open(PopupModalComponent);
    modalRef.result.then((result) => {
      if (result) {
        this.truckService.addTruck(result)
        // this.TRUCK_DATA.push(result);
      }
    });
  }

  // TO DO
  // if (window.confirm("Are you sure")) { }

  remove(truckname: string): void {

    //work this.truckService.removeTruck(truckname)

    const modalRef = this.modalService.open(PopupModalDeleteComponent);
    modalRef.componentInstance.truckname = truckname;
  

  }



  ngOnInit(): void {

    this.alltrucks = this.truckService.getTrucks()



  }
}
