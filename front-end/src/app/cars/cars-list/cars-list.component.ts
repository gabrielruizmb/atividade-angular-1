import { Component, inject } from '@angular/core';
import { Car } from '../car';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.scss']
})
export class CarsListComponent {
  
  modalService = inject(NgbModal);
  carsList: Car[] = [];

  constructor() {
    this.carsList.push(new Car(1, "Chevrolett Impala", 1967));
    this.carsList.push(new Car(2, "Ford Corcel", 1981));
    this.carsList.push(new Car(3, "Ford Mustang", 1965));
  }

  openModal(modal: any) {
    this.modalService.open(modal);
  }
}
