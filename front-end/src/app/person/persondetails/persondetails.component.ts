import { Component, EventEmitter, Inject, Input, Output, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Person } from '../person';
import { PersonService } from 'src/app/services/person-service.service';

@Component({
  selector: 'app-persondetails',
  templateUrl: './persondetails.component.html',
  styleUrls: ['./persondetails.component.scss']
})
export class PersondetailsComponent {

  route = inject(ActivatedRoute);
  personService = inject(PersonService);
  @Input() person: Person = new Person();
  @Output() return = new EventEmitter();


  constructor() {
    // let id = this.route.snapshot.paramMap.get('id');

    // if(id) {
    //   this.person = new Person(11, "James Howlett", 99);
    // } else {
    //   this.person = new Person(0, "", 0);
    // }
  }

  // save() {
  //   this.return.emit(this.person);
  // }

  save() {
    if(this.person.id === undefined) {
      this.personService.post(this.person).subscribe({
        next: response => {
          console.log(response);
          // this.person = new Person();
        },
        error: response => {
          console.log(response.error.name);
          console.log(response.error.age);
        }
      });
    } else {
      this.personService.put(this.person.id, this.person).subscribe({
        next: response => {
          console.log(response);
        },
        error: response => {
          console.log(response.error.name);
          console.log(response.error.age);
        }
      });
    }
  }

  closeModalAndReloadList(object: object) {
    this.return.emit(object);
  }
}
