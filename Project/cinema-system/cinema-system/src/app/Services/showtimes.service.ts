import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {FormControl} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ShowtimesService {

  public API: string = 'http://localhost:8080/movieSchedules';
  // public API_SEATS:string = 'http://localhost:8080/seats';


  constructor(
    public http: HttpClient
  ) {
  }

  getAllFilm(): Observable<any> {
    return this.http.get(this.API);
  }

  // getAllSeat(): Observable<any> {
  //   return  this.http.get(this.API_SEATS);
  // }

}
