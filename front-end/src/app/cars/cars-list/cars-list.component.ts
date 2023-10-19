import { Component, inject } from '@angular/core';
import { Car } from '../car';
import { PersonService } from 'src/app/services/person-service.service';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.scss']
})
export class CarsListComponent {
  
  personService = inject(PersonService);
  carsList: Car[] = [];

  constructor() {
    // this.carsList.push(new Car(1, "Chevrolett Impala", 1967));
    // this.carsList.push(new Car(2, "Ford Corcel", 1981));
    // this.carsList.push(new Car(3, "Ford Mustang", 1965));
    this.getAll();
  }

  getAll() {
    this.personService.findAll().subscribe({
      next: carsList => {
        this.carsList = carsList;
      },
      error: response => {
        console.log(response);
      }
    });
  }
}
