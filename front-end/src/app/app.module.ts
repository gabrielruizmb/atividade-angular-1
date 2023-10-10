import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './layout/index/index.component';
import { PersonListComponent } from './person/person-list/person-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { LoginComponent } from './system/login/login.component';
import { PersondetailsComponent } from './person/persondetails/persondetails.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarsListComponent } from './cars/cars-list/cars-list.component';
import { CarsDetailsComponent } from './cars/cars-details/cars-details.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    PersonListComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    PersondetailsComponent,
    CarsListComponent,
    CarsDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
