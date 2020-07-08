import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TokenStorageService} from "../Components/component-vu/service/token-storage.service";

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {


  public API: string = 'http://localhost:8080/api/v1/users';

  httpOptions: any;
  constructor(private http: HttpClient, private tokenStorage: TokenStorageService) {
    this.httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ` + this.tokenStorage.getToken() })
      , 'Access-Control-Allow-Origin': 'http://localhost:4200/', 'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
    };
  }

  getUserEdit(id:number):Observable<any>{
    return this.http.get(`${this.API}/${id}`,this.httpOptions);
  }


  updateUser(user):Observable<any>{
    return this.http.put(`${this.API}/${user.id}`,user,this.httpOptions)
  }

  updatePassword(id:number,post: any): Observable<any>{
    return this.http.patch(this.API + '/updatePassword/' + id + '/password',post,this.httpOptions);
  }
}

