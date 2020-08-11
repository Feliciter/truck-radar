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
      truck: ['',[Validators.required, Validators.minLength(4)]],
      latitude: ['',[Validators.required,  Validators.pattern("^(\\+|-)?(?:90(?:(?:\\.0{1,6})?)|(?:[0-9]|[1-8][0-9])(?:(?:\\.[0-9]{1,6})?))$")]],
      longitude: ['',[Validators.required,  Validators.pattern("^(\\+|-)?(?:180(?:(?:\\.0{1,6})?)|(?:[0-9]|[1-9][0-9]|1[0-7][0-9])(?:(?:\\.[0-9]{1,6})?))$")]]
     
    });
  }
  // onSubmit() {
  //   const placetruck = this.truckForm.value;
  //   console.log('Your searh has been submitted in header comp', placetruck);
  //   this.addTruck.emit(placetruck);
  //   //TO DO use model

  //   this.truckForm.reset();
  // }

  //todo
   saveUser() {
    if (this.truckForm.dirty && this.truckForm.valid) {
      alert(
        `truck: ${this.truckForm.value.truck} latitude: ${this.truckForm.value.latitude} longitude: ${this.truckForm.value.longitude}`
      );
    }
  }

  ngOnInit() {}
}
