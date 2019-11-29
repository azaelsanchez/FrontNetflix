import { Component, OnInit, ViewChild, AfterViewInit, OnChanges, ElementRef } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from '../../services/user.service';
import { MatInputModule, MatButtonModule, MatFormFieldModule } from '@angular/material';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements AfterViewInit {
  // @ViewChild('username',{read: ElementRef,static:false})
  username;
  password;
  email;
  user:User = {
    username:"",
    password:"",
    email:""
  }
  constructor(private userService:UserService) { }

  ngAfterViewInit(){
    setTimeout(() => { 
      this.username.nativeElement.focus()
     }, 0);
  }
  registrar(form:any){
    
    this.user.username = form.value.username;
    this.user.password = form.value.password;
    this.user.email = form.value.email;
    console.log(this.user)
    
      this.userService.register(this.user)
        .subscribe(res=>console.log(res))
  }
}