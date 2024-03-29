import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "../entity/user";

@Injectable({
  providedIn: "root",
})
export class UserService {
  private baseURL = "https://hackthisfall.herokuapp.com/";

  constructor(private http: HttpClient) {}

  registerUser(obj): Observable<Response> {
    let httpHeaders = new HttpHeaders().set("Content-Type", "application/json");
    return this.http.post<Response>("https://hackthisfall.herokuapp.com/register", obj);
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
}
