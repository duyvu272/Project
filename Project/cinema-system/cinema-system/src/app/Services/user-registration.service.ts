import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {
  public APIUrl = 'http://localhost:8080/api/v1/customers';
  constructor(public http: HttpClient) { }
  postAccount(customer): Observable<any> {
    return this.http.post(this.APIUrl, customer);
  }

  getAllAccounts(): Observable<any> {
    return this.http.get(this.APIUrl);
  }
  deleteIdAccounts(id): Observable<any> {
    return this.http.delete(`${this.APIUrl}/delete/${id}`);
  }
  putAccounts(customer):Observable<any> {
    return this.http.put(`${this.APIUrl}/put/${customer.id}`,customer);
  }

}
