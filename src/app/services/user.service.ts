import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../entity/user';
import { fakeCallNumber, sosMessage } from '../user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http1: HttpClient) { }

  RegisterUser(obj: User): Observable<User> {
    let httpHeaders = new HttpHeaders()
      .set('Content-Type', 'application/json')
    return this.http1.post<User>("https://url", obj)
  }

  checkIfUserExists(phoneNumber: number) {
    //https://hackthisfall.herokuapp.com/check?user=9400881089
  }

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
