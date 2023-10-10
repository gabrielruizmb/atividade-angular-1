import { Component, EventEmitter, Output, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Person } from '../person';

@Component({
  selector: 'app-persondetails',
  templateUrl: './persondetails.component.html',
  styleUrls: ['./persondetails.component.scss']
})
export class PersondetailsComponent {

  route = inject(ActivatedRoute);
  person: Person = new Person(0, "Nome", 0);

  @Output() return = new EventEmitter<Person>();

  constructor() {
    let id = this.route.snapshot.paramMap.get('id');

    if(id) {
      this.person = new Person(11, "James Howlett", 99);
    } else {
      this.person = new Person(0, "", 0);
    }
  }

  save() {
    this.return.emit(this.person);
  }
}
