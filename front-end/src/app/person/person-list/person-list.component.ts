import { Component, inject } from '@angular/core';
import { Person } from '../person';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PersonService } from 'src/app/services/person-service.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss']
})
export class PersonListComponent {
  
  modalService = inject(NgbModal);
  personService = inject(PersonService);
  personsList: Person[] = [];
  personToUpdate: Person = new Person();

  constructor() {
    this.findAll();
    // this.personsList.push(new Person(1, "Charles Francis Chavier", 55));
    // this.personsList.push(new Person(2, "Scott Summers", 31));
    // this.personsList.push(new Person(3, "Alice Wonderland", 30));
    // this.personsList.push(new Person(4, "Kurt Wagner", 16));
    // this.personsList.push(new Person(5, "Ororo Monroe", 34));
    // this.personsList.push(new Person(6, "Epaminondas da Silva", 50));
    // this.personsList.push(new Person(7, "Madamme Mim", 60));
    // this.personsList.push(new Person(8, "Filomena das Rosas", 40));
    // this.personsList.push(new Person(9, "Kitty Pride", 32));
    // this.personsList.push(new Person(10, "Maximmus Décimus", 35));
  }

  findAll(){
    this.personService.findAll().subscribe({
      next: personsList => {
        this.personsList = personsList;
      },
      error: error => {
        alert('Error!');
        console.log(error);
      }     
    });
  }

  openModal(content: any) {
    this.modalService.open(content);
  }

  openModalToEdit(content:any, person: Person) {
    this.personToUpdate = person;
    this.modalService.open(content);
  }

  reloadPersonsList(object: object) {
    this.findAll();
    this.modalService.dismissAll();
  }
}
