import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Signup } from '../car';

import { CarService } from '../car.service';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

 

  signup: Signup = new Signup();

  invalidLogin!: boolean;

  constructor( private carserivce:CarService, private router:Router) {

   }

  ngOnInit(): void {
  }


  saveDetails(){
    // console.log("sign")
    this.carserivce.signupage(this.signup).subscribe(data =>{
      console.log(data);
      this.navigateSignup();
    })

  }

  navigateSignup(){
    this.router.navigate(['/login']);
  }

  handleLogin(){; 
    this.carserivce.loginpage(this.signup).subscribe(data=>{
      // console.log(data);
      if(data!=null){
        alert(" Login Successful");
        this.router.navigate(['/navbar']);
        this.invalidLogin=false;
      }
      else{
        // console.log("invalid login");
        window.location.reload();
        alert(" Invalid Login  Details");
        this.invalidLogin =true;
      }
    })

  }

  onSubmit(){
    // console.log(this.signup);
    this.saveDetails();
    alert("you have registerd successfully");
  }
}
