import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TokenStorageService} from "./token-storage.service";

const API_URL = 'http://localhost:8080/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  httpOptions: any;
  constructor(private http: HttpClient, private tokenStorage: TokenStorageService) {
    this.httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ` + this.tokenStorage.getToken() })
      , 'Access-Control-Allow-Origin': 'http://localhost:4200/', 'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
    };
  }

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }


  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', this.httpOptions);
  }

  addCustomer(post: Partial<any>): Observable<any>{
    return this.http.post(API_URL + 'api/v1/auth/signup', post);
  }

  getListUser(): Observable<any> {
    return this.http.get(API_URL + 'users');
  }

  updateUser(id: any): Observable<any> {
    return this.http.patch(API_URL + 'updateStatus/' + id, id);
  }

  getUserById(id: any): Observable<any> {
    return this.http.get(API_URL + 'user/' + id);
  }

  updatePassword(id: any, pass: any): Observable<any> {
    return this.http.patch(API_URL + 'api/v1/users/updatePassword/' + id + '/password',pass);
  }
  getAllCustomer():Observable<any> {
    return this.http.get(API_URL + 'customers');
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'api/v1/users/user',this.httpOptions);
  }

  getUserByUserName(username:string):Observable<any> {
    return this.http.get(API_URL + 'api/v1/users/find/'+ username,this.httpOptions);
  }


}
