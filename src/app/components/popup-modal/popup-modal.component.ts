import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Truck } from '../../model/truck';

import { FormBuilder } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-popup-modal',
  templateUrl: './popup-modal.component.html',
  styleUrls: ['./popup-modal.component.scss'],
})
export class PopupModalComponent implements OnInit {
  @Output() addTruck = new EventEmitter<Truck>();

  truckForm;

  constructor(
    private formBuilder: FormBuilder,
    public activeModal: NgbActiveModal
  ) {
    this.truckForm = this.formBuilder.group({
      truckname: ['',[Validators.required, Validators.minLength(4)]],
      latitude: ['',[Validators.required,  Validators.pattern("^(\\+|-)?(?:90(?:(?:\\.0{1,6})?)|(?:[0-9]|[1-8][0-9])(?:(?:\\.[0-9]{1,6})?))$")]],
      longitude: ['',[Validators.required,  Validators.pattern("^(\\+|-)?(?:180(?:(?:\\.0{1,6})?)|(?:[0-9]|[1-9][0-9]|1[0-7][0-9])(?:(?:\\.[0-9]{1,6})?))$")]]
     
    });
  }

  submit() {
    if (this.truckForm.dirty && this.truckForm.valid) {
      console.log(
       // `truck: ${this.truckForm.value.truckname} latitude: ${this.truckForm.value.latitude} longitude: ${this.truckForm.value.longitude}`
      );
      const truck = {
        truckname: this.truckForm.value.truckname,
        latitude: this.truckForm.value.latitude,
        longitude: this.truckForm.value.longitude,

      };

      console.log(truck)

      this.activeModal.close(truck)

     // this.addTruck.emit(truck);
    }
  }
  ngOnInit() {}
}
