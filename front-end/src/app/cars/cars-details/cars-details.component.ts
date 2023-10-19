import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from '../car';
import { PersonService } from 'src/app/services/person-service.service';
import { Person } from 'src/app/person/person';

@Component({
  selector: 'app-cars-details',
  templateUrl: './cars-details.component.html',
  styleUrls: ['./cars-details.component.scss']
})
export class CarsDetailsComponent {

  route = inject(ActivatedRoute);
  personService = inject(PersonService);
  formAction!: string;
  car!: Car;

  constructor() {
    let id = this.route.snapshot.paramMap.get('id');
    let action = this.route.snapshot.paramMap.get('action');
    console.log(id, action);
    action === null ? this.formAction = 'cadastrar' : this.formAction = action;
    if(this.formAction !== 'cadastrar') {
      this.get(id);
    }
  }

  get(id: any) {
    this.personService.getOne(id).subscribe({
      next: car => {
        this.car = car;
        console.log(this.car);
      },
      error: response => {
        console.log(response);
      }
    });
  }
}


