import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Car } from './car';
import { CARS } from './mock-cars';

@Injectable()
export class CarService {

 constructor(private http: HttpClient){}

  getCars(): Promise<Car[]> {
    return Promise.resolve(CARS);
  }

  getCar(id: number): Promise<Car> {
    return Promise.resolve(CARS[id]);
  }

  rent(car) {
    this.http.put('localhost:8080/cars/'+ car.id, "");
    car.rented = "Voiture louée";
  }

  getBack(car) {
    this.http.delete('localhost:8080/cars/'+ car.id, "");
    car.rented = "Voiture rendue";
  }

}
