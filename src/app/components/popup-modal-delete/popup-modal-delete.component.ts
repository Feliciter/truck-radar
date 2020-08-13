import { Component, OnInit,Input } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TruckService } from '../../services/truck.service';

@Component({
  selector: 'app-popup-modal-delete',
  templateUrl: './popup-modal-delete.component.html',
  styleUrls: ['./popup-modal-delete.component.scss']
})
export class PopupModalDeleteComponent implements OnInit {


  @Input() public truckname;

  constructor(
    private truckService: TruckService,
    public activeModal: NgbActiveModal
  ) { }

  

  remove(truckname:string) {

    console.log( truckname)

   this.truckService.removeTruck(truckname)
   
  }

  ngOnInit(): void {

    
  }

}
