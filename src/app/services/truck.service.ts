import { Injectable } from '@angular/core';

import { Truck } from '../model/truck';
import { TRUCK_DATA } from './truck-data';



@Injectable({
  providedIn: 'root'
})
export class TruckService {

  data=TRUCK_DATA

  constructor( ) { }

  getTrucks(): Truck[] {
    return TRUCK_DATA ;
  }

  addTruck(result:Truck )  { TRUCK_DATA.push(result) }



  removeTruck(truckname:string): void {

    const index: number = this.data.findIndex(
        (i) => i.truckname === truckname)

    if (index !== -1) {
      this.data.splice(index, 1);
    }
  }


}



  // getTruck(truckname: string): Truck{
  //   return TRUCK_DATA.find(item => item.truckname === truckname);
  // }



