import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Car } from '../car';
import { CarService } from '../car.service';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit {
  cars!: Car[];

  constructor( private carService: CarService, private route:Router) { }

  ngOnInit(): void {
    this.getCars();
  }

  private getCars(){
    this.carService.getCarsList().subscribe(data =>{
      this.cars=data;
    })
  }

  updateCar(id:number){
    this.route.navigate(['update-car',id]);
  }

  deleteCar(id:number){
    this.carService.deleteCar(id).subscribe(data =>{
      console.log(data);
      this.getCars();
    })
  }

  carDetails(id:number){
    this.route.navigate(['car-details',id]);

  }

}
