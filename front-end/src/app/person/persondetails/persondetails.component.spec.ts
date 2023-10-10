import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersondetailsComponent } from './persondetails.component';

describe('PersondetailsComponent', () => {
  let component: PersondetailsComponent;
  let fixture: ComponentFixture<PersondetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersondetailsComponent]
    });
    fixture = TestBed.createComponent(PersondetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
