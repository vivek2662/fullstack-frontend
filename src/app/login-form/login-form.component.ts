import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from '../car';
import { CarService } from '../car.service';



@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  myForm:any= FormGroup;

  login:Login=new Login();

  invalidLogin=false;

  constructor(private fb: FormBuilder,
    private router: Router,
    private carService: CarService
    ) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      // Name: ['', Validators.required],
      Username: ['', [Validators.required, Validators.email]],
      Password: ['', [Validators.required, Validators.minLength(3)]],
    });
  }
  submit(form:NgForm){
    // console.log('Valid?', form.valid); // true or false
    // // console.log('Name', form.value.Name);  
    // console.log('Username', form.value.Username);
    // console.log('Password', form.value.Password);
    this.login.username= form.value.Username;
    this.login.password= form.value.Password; 
    // console.log(this.login.username);
    this.handleLogin();
  }

  handleLogin(){; 
    this.carService.loginpage(this.login).subscribe(data=>{
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
        this.invalidLogin=true;
      }
    })

  }


  
}
