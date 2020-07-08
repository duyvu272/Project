import {Component, OnInit} from '@angular/core';
import {ShowtimesService} from '../../../Services/showtimes.service';

@Component({
  selector: 'app-showtimes',
  templateUrl: './showtimes.component.html',
  styleUrls: ['./showtimes.component.css']
})

export class ShowtimesComponent implements OnInit {
  isFilter = false;
  public showtimes;
  public date = [];
  public listFilm: string;
  public listFilm1 = [];
  public listFilmId = [];
  public listFilmId1 = [];
  public nameFilm;
  public img;
  public hourStarFilm = [];
  public nameHourFilm = [this.nameFilm, this.img, this.hourStarFilm];
  public nameHourFilm1 = [];

  constructor(
    public showtimerService: ShowtimesService) {
  }

  ngOnInit(): void {
    this.isFilter = false;
    this.showtimerService.getAllFilm().subscribe(data => {
      this.showtimes = data;
      for (let i = 0; i < this.showtimes.length; i++) {
        this.date.push(this.showtimes[i].openingDay);
      }

      const uniqueSet = new Set(this.date);
      this.date = Array.from(uniqueSet);
    });
  }

  print() {
    this.nameHourFilm1 = [];
    this.listFilmId1 = [];
    this.showtimerService.getAllFilm().subscribe(data => {
      this.showtimes = data;

      for (let i = 0; i < this.showtimes.length; i++) {
        if (this.listFilm === this.showtimes[i].openingDay) {
          this.listFilm1.push(this.showtimes[i]);
        }
      }

      for (let i = 0; i < this.listFilm1.length; i++) {
        this.listFilmId.push(this.listFilm1[i]);
        for (let j = 1; j < this.listFilm1.length; j++) {
          if (this.listFilm1[i].movie['id'] === this.listFilm1[j].movie['id']) {
            this.listFilmId.push(this.listFilm1[j]);
            this.listFilm1.splice(j, 1);
            j = j - 1;
          }
        }
        this.listFilmId1.push(this.listFilmId);
        this.listFilmId = [];
        this.listFilm1.splice(i, 1);
        i = i - 1;
      }

      for (let i = 0; i < this.listFilmId1.length; i++) {
        for (let j = 0; j < this.listFilmId1[i].length; j++) {
          this.nameFilm = this.listFilmId1[i][j].movie['movieName'];
          this.img = this.listFilmId1[i][j].movie['srcImg'];
          this.hourStarFilm.push(this.listFilmId1[i][j].showTime['hourStart']);
        }
        this.nameHourFilm = [this.nameFilm, this.img, this.hourStarFilm];
        this.nameHourFilm1.push(this.nameHourFilm);
        this.nameHourFilm = [];
        this.hourStarFilm = [];
        this.img = [];
      }
    });
  }
}
