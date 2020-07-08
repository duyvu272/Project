import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BanVeService {

  constructor(public http: HttpClient) { }
  // public API_ban_ve = 'http://localhost:3000/days';
  public API_chon_ghe = 'http://localhost:8080/show-rooms';
  //
  // getAllmovies(): Observable<any>{
  //   return this.http.get(this.API_ban_ve);
  // }
  getAllSeats(): Observable<any>{
    return  this.http.get(this.API_chon_ghe);
  }


}
