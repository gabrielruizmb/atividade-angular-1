import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../person/person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  API: string = 'http://localhost:8080/pessoas';
  http = inject(HttpClient);

  constructor() {}

  findAll(): Observable<Person[]> {
    return this.http.get<Person[]>(this.API);
  }

  post(person: Person): Observable<string> {
    return this.http.post<string>(this.API, person);
  }

  put(id: number, person: Person): Observable<string> {
    return this.http.put<string>(this.API + "/" + id, person);
  }
}
