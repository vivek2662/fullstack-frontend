import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car, Login, Signup } from './car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private baseURL= "http://localhost:8080/api/v1/cars"; 
  private loginURL = "http://localhost:8080/api/v1/loginpage";
  private signupURL = "http://localhost:8080/api/v1/signup";

  constructor( private httpClient:HttpClient) { }

  getCarsList() :Observable<Car[]>{
    return this.httpClient.get<Car[]>(`${this.baseURL}`);
  }

  createCar(cars: Car): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,cars);
   }

   getCarById(id:number):Observable<Car>{
    return this.httpClient.get<Car>(`${this.baseURL}/${id}`);
   }

   updateCar(id:number,employee:Car):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,employee);
   }
   
   deleteCar(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
   }

   loginpage(loginpage:Login):Observable<any>{
    return this.httpClient.post(`${this.loginURL}`,loginpage);
   }

   signupage(signupage :Signup):Observable<Object>{
    return this.httpClient.post(`${this.signupURL}`,signupage);
   }

}
