import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Car } from '../car';
import { CarService } from '../car.service';

@Component({
  selector: 'app-create-cars',
  templateUrl: './create-cars.component.html',
  styleUrls: ['./create-cars.component.css']
})
export class CreateCarsComponent implements OnInit {

  car: Car =new Car();
  constructor(private carService :CarService, private router:Router) { }

  ngOnInit(): void { 

  }
    saveCar(){
      this.carService.createCar(this.car).subscribe(data =>{
        console.log(data); 
        this.gotoCarList();
      },
      error => console.log(error));
    }

    gotoCarList(){
      this.router.navigate(['/cars'])
    }

  onSubmit(){
    console.log(this.car)
    this.saveCar();
  }
}
