import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './layout/index/index.component';
import { LoginComponent } from './system/login/login.component';
import { PersonListComponent } from './person/person-list/person-list.component';
import { PersondetailsComponent } from './person/persondetails/persondetails.component';
import { CarsListComponent } from './cars/cars-list/cars-list.component';
import { CarsDetailsComponent } from './cars/cars-details/cars-details.component';

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "admin", component: IndexComponent, children: [
    { path: "pessoas", component: PersonListComponent },
    { path: "pessoas/novo", component: PersondetailsComponent },
    { path: "pessoas/editar/:id", component: PersondetailsComponent },
    { path: "carros", component: CarsListComponent },
    { path: "carros/novo", component: CarsDetailsComponent },
    { path: "carros/:action/:id", component: CarsDetailsComponent }
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
