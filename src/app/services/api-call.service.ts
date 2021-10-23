import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { fakeCallNumber, sosMessage } from "../entity/user";

@Injectable({
  providedIn: "root",
})
export class ApiCallService {
  constructor(private http1: HttpClient) {}

  sosMessage(obj: sosMessage): Observable<sosMessage> {
    let httpHeaders = new HttpHeaders().set("Content-Type", "application/json");
    return this.http1.post<sosMessage>(
      "https://hackthisfall.herokuapp.com/sos",
      obj
    );
  }

  fakeCall(objFake: fakeCallNumber) {
    let httpHeaders = new HttpHeaders().set("Content-Type", "application/json");
    return this.http1.post<fakeCallNumber>(
      "https://hackthisfall.herokuapp.com/fakecall",
      objFake
    );
  }
}
