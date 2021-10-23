import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http1:HttpClient) { }

  RegisterUser(obj:User):Observable<User>
  {
    let httpHeaders =  new HttpHeaders()
    .set('Content-Type','application/json')
    return this.http1.post<User>("https://url",obj)
  }

  checkIfUserExists(phoneNumber:number)
  {
    //https://hackthisfall.herokuapp.com/check?user=9400881089
  }

}
