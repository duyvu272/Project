import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  public API: string = 'http://localhost:8080/tickets';
  

  constructor(
    public http: HttpClient
  ) { }

  getAllFilms(): Observable<any>{
    return this.http.get(this.API );
  }

  getDayById(ticketId: any): Observable<any>{
    return this.http.get(this.API + '/' + ticketId);
  }

  getAllHours(): Observable<any>{
    return this.http.get(this.API);
  }
}
