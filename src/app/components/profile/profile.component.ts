import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from 'src/app/models/user';
import { Profile } from 'src/app/models/profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  private token:any;
  public profile:any;
  public pedidos:any=[];
  
  constructor(private userService: UserService) { }

  ngOnInit() {
   
    this.token = localStorage.getItem('auth')
    this.userService.profile(this.token)
    .subscribe((data)=>{this.profile=data
      this.pedidos= this.profile.viewedFilms})     
  }
}