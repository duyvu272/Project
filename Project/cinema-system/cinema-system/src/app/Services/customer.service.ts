import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http' ;
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
	public API = 'http://localhost:8080/customers';
  public API2 = 'http://localhost:8080/tickets';
  public API3 = 'http://localhost:8080/movies';

  constructor(
  	public http: HttpClient
  	) { }
  getCustomerById(customerId): Observable<any> {
  return this.http.get(this.API + '/' + customerId)
	}
	getAllCustomers(): Observable<any> {
  	return this.http.get(this.API)
  }
  getTicketById(ticketId): Observable<any> {
    return this.http.get(this.API2 + '/' + ticketId)
  }
  getAllMovies(): Observable<any>{
    return this.http.get(this.API3  )
  }
  
  addNewFilm(film): Observable<any> {
    return this.http.post(this.API3, film)
  }
  editFilm(film, filmid): Observable<any>{
    return this.http.put(this.API3 + '/' + filmid, film)
  }
  
}
