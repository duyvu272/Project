import {Component, OnInit} from '@angular/core';
import {FilmService} from '../service/film.service';
import {HttpService} from 'src/app/Services/http.service';
import {Router} from '@angular/router';
import {TokenStorageService} from '../../component-vu/service/token-storage.service';


@Component({
  selector: 'app-list-film',
  templateUrl: './list-film.component.html',
  styleUrls: ['./list-film.component.scss']
})
export class ListFilmComponent implements OnInit {
  page = 1;
  search: string;
  movieSchedule;
  ticket;

  isLoggedIn = false;
  public film;
  check: boolean;
  constructor(private filmService: FilmService,
              private myHttp: HttpService,
              private router: Router, private tokenStorageService: TokenStorageService) {
  }

  ngOnInit(): void {
    this.check = false;
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      this.check = true;
    }
      this.filmService.getAllFilm().subscribe(data => {
        this.film = data;
      });

  }

  onMovieSelect(movie: any) {
    this.myHttp.getAll("movie-schedules/empty").subscribe(movieSchedule => {
      this.movieSchedule = movieSchedule;
      this.movieSchedule.movie = movie;
    });
    this.myHttp.getAll("tickets/empty").subscribe(ticket => this.ticket = ticket);

    this.router.navigate(['/booking'], {state: {movieSchedule: this.movieSchedule, ticket: this.ticket}});
  }


}
