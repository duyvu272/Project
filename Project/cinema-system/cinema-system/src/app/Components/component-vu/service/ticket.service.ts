import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

const API_URL = 'http://localhost:8080/api/v1/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http: HttpClient) {

  }

  getAllTicket(): Observable<any> {
    return this.http.get(API_URL);
  }

  getTicketById(id: number): Observable<any> {
    return this.http.get(API_URL + '/' + id);
  }

  getSumPoint(id: number): Observable<any> {
    return this.http.get('http://localhost:8080/api/v1/point/' + id + '/point-value')
  }

  getSubPoint(id: number): Observable<any> {
    return this.http.get('http://localhost:8080/api/v1/point/' + id + '/sub-point')
  }

  addNewPoint(post:any): Observable<any>{
    return this.http.post('http://localhost:8080/api/v1/point/create',post);
  }

  getPointById(id: any): Observable<any>{
    return this.http.get('http://localhost:8080/api/v1/point/find-point/'+ id);
  }
  updateOrderStatus(id:any): Observable<any>{
    return this.http.patch(API_URL+ '/update-order-status/'+id,id);
  }

  getAllPoint(): Observable<any>{
    return this.http.get('http://localhost:8080/api/v1/point');
  }

}
