import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cars-details',
  templateUrl: './cars-details.component.html',
  styleUrls: ['./cars-details.component.scss']
})
export class CarsDetailsComponent {

  route = inject(ActivatedRoute);

  constructor() {
    let id = this.route.snapshot.paramMap.get('id');
    let action = this.route.snapshot.paramMap.get('action');
    console.log(id, action);
  }
}
