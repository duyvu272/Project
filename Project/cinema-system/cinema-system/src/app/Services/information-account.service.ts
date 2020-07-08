import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TokenStorageService} from "../Components/component-vu/service/token-storage.service";

@Injectable({
  providedIn: 'root'
})
export class InformationAccountService {

  public API: string = 'http://localhost:8080/api/v1/customers';
  httpOptions: any;
  constructor(private http: HttpClient, private tokenStorage: TokenStorageService) {
    this.httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ` + this.tokenStorage.getToken() })
      , 'Access-Control-Allow-Origin': 'http://localhost:4200/', 'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
    };
  }

  getAccountEdit(id:number):Observable<any>{
    // this.httpOptions = {
    //   headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ` + this.tokenStorage.getToken() })
    //
    //   , 'Access-Control-Allow-Origin': 'http://localhost:4200/', 'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
    // };
    // console.log(this.tokenStorage.getToken() );
    // console.log(this.httpOptions);
    return this.http.get(`${this.API}/${id}`,this.httpOptions);
  }


  updateAccount(account):Observable<any>{
    return this.http.put(`${this.API}/${account.id}`,account,this.httpOptions)
  }
}
