import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { GLOBAL } from './global';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user:User=JSON.parse(localStorage.getItem('user')) ;
  constructor(private httpClient:HttpClient) { }
  isRed=false;
  register(user:User):Observable<object>{
    return this.httpClient.post('http://localhost:3000/user/register',user)
  }
  login(user:User):Observable<object>{
    return this.httpClient.patch('http://localhost:3000/user/login',user)
  }

  getUser():User{
    return this.user;
  }
  setUser(user:User):void{
    this.user=user;
    localStorage.setItem('user',JSON.stringify(user) )
  }

}

