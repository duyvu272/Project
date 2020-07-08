import { Component, OnInit } from '@angular/core';
import {FilmService} from '../../component-tuan/service/film.service';
import {HttpService} from '../../../Services/http.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-films',
  templateUrl: './list-films.component.html',
  styleUrls: ['./list-films.component.css']
})
export class ListFilmsComponent implements OnInit {
  page = 1;
  search: string;
  movieSchedule;
  ticket;

  public film;

  constructor(private filmService: FilmService,private myHttp: HttpService,private router: Router) { }

  ngOnInit(): void {

    this.filmService.getAllFilm().subscribe(data => {
      this.film = data;
    });
  }

  onMovieSelect(movie:any){
    this.myHttp.getAll('movie-schedules/empty').subscribe(movieSchedule=>{
      this.movieSchedule=movieSchedule;
      this.movieSchedule.movie=movie;
    });
    this.myHttp.getAll('tickets/empty').subscribe(ticket=>this.ticket=ticket);

    this.router.navigate(['/booking'],{state:{movieSchedule:this.movieSchedule,ticket:this.ticket}});
  }

}
