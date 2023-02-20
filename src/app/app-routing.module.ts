import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDetailsComponent } from './car-details/car-details.component';
import { CarsListComponent } from './cars-list/cars-list.component';
import { CreateCarsComponent } from './create-cars/create-cars.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { UpdateCarComponent } from './update-car/update-car.component';

const routes: Routes = [
  {path:'cars' ,component:CarsListComponent},
  {path :'navbar', component:NavbarComponent},
  {path:'create-car', component:CreateCarsComponent},
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'update-car/:id', component:UpdateCarComponent},
  {path:'car-details/:id', component:CarDetailsComponent},
  {path:'login', component:LoginFormComponent},
  {path:'signup', component:SignupFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
