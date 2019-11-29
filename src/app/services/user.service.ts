import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  setUser(arg0: any) {
    throw new Error("Method not implemented.");
  }
  login(user: User) {
    throw new Error("Method not implemented.");
  }
  private user:User;
  constructor(private httpClient:HttpClient) { }

  register(user:User):Observable<object>{
   
    console.log(user)
    return this.httpClient.post('http://localhost:3002/user/register', user)
  }
  

}
