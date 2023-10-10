import { Component, inject } from '@angular/core';
import { Person } from '../person';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss']
})
export class PersonListComponent {
  
  modalService = inject(NgbModal);
  personsList: Person[] = [];

  constructor() {
    this.personsList.push(new Person(1, "Charles Francis Chavier", 55));
    this.personsList.push(new Person(2, "Scott Summers", 31));
    this.personsList.push(new Person(3, "Alice Wonderland", 30));
    this.personsList.push(new Person(4, "Kurt Wagner", 16));
    this.personsList.push(new Person(5, "Ororo Monroe", 34));
    this.personsList.push(new Person(6, "Epaminondas da Silva", 50));
    this.personsList.push(new Person(7, "Madamme Mim", 60));
    this.personsList.push(new Person(8, "Filomena das Rosas", 40));
    this.personsList.push(new Person(9, "Kitty Pride", 32));
    this.personsList.push(new Person(10, "Maximmus Décimus", 35));
  }

  openModal(content: any) {
    this.modalService.open(content);
  }

  addOnList(person: Person) {
    this.personsList.push(person);
    this.modalService.dismissAll();
  }
}
