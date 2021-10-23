
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "../entity/user";

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../entity/user';
import { fakeCallNumber, sosMessage } from '../user';
import { User } from '../app/user';



@Injectable({
  providedIn: "root",
})
export class UserService {
  private baseURL = "https://hackthisfall.herokuapp.com/";

  constructor(private http: HttpClient) {}

  registerUser(obj: User): Observable<User> {
    let httpHeaders = new HttpHeaders().set("Content-Type", "application/json");
    return this.http.post<User>("https://url", obj);
  }

  checkIfUserExists(phoneNumber: string): Observable<Response> {
    let validationNumber: string = phoneNumber.substring(3);
    return this.http.get<Response>(
      `${this.baseURL}check?user=${validationNumber}`
    );
  }
}


interface Response {
  status: string;
  result: User;


  sosMessage(obj: sosMessage):Observable<sosMessage>
  {
    let httpHeaders =  new HttpHeaders()
    .set('Content-Type','application/json')
    return this.http1.post<sosMessage>("https://hackthisfall.herokuapp.com/sos",obj)
  }

  fakeCall(objFake:fakeCallNumber) {
    let httpHeaders =  new HttpHeaders()
    .set('Content-Type','application/json')
    return this.http1.post<fakeCallNumber>("https://hackthisfall.herokuapp.com/fakecall",objFake)
  }

}
