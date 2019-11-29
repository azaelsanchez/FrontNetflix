import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {
  user:User={
    username:'',
    password:'',
    email:''
  };
  res:object;
  constructor(
    private userService: UserService,
    private router:Router) { }
    login(){
      this.userService.login(this.user)
      .subscribe(res =>  {
        console.log
        localStorage.setItem('user', JSON.stringify(res)), setTimeout(() => {
        location.reload(true);
      }, 1000),  setTimeout(() => {
        this.router.navigate(['/movies'])
      }, 999)})
      
      
    }
  }