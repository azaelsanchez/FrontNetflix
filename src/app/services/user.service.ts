import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { Profile } from '../models/profile'



@Injectable({
  providedIn: 'root'
})
export class UserService {
  storagedToken: any;
  profile(token){
    console.log("aqui tambien")
    this.storagedToken=JSON.parse(token)

    return this.httpClient.get('http://localhost:3001/user/profile',{headers: {Authorization: this.storagedToken.token }})

  }
  private user:User=JSON.parse(localStorage.getItem('user')) ;
  isRed=false;

  constructor(private httpClient:HttpClient) { }

  register(user:User):Observable<object>{
    return this.httpClient.post('http://localhost:3000/user/register',user)
  }
  login(user:User):Observable<object>{
    return this.httpClient.post('http://localhost:3000/user/login',user)
  }
  

  getUser():User{
    return this.user;
  }
  setUser(user:User):void{
    this.user=user;
    localStorage.setItem('user',JSON.stringify(user) )
  }

}
