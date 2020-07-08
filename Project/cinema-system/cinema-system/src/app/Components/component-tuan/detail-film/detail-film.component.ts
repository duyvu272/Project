import { Component, OnInit } from '@angular/core';

import {ActivatedRoute} from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import {FilmService} from '../service/film.service';

@Component({
  selector: 'app-detail-film',
  templateUrl: './detail-film.component.html',
  styleUrls: ['./detail-film.component.scss']
})
export class DetailFilmComponent implements OnInit {
  public filmDetail;
  public schedule;
  public schedule1;
  public day;
  public hour = [];
  public dayHours1: any[];
  public dayHours = [];
  public id: number;

  constructor(private filmService: FilmService, private route: ActivatedRoute,
              public sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(data => {
      this.id = data.id;
      this.filmService.getFilmById(this.id).subscribe(data => {
        this.filmDetail = data;
        console.log(this.filmDetail);
      });
    });

    this.route.params.subscribe(data => {
      this.id = data.id;
      this.filmService.getScheduleById(this.id).subscribe(data => {
        this.schedule = data;
        this.schedule1 = data;
        console.log(this.schedule);
        console.log(this.schedule1);
        for (let i = 0; i < this.schedule1.length; i++) {

          this.day = this.schedule1[i].openingDay;
          this.hour.push(this.schedule1[i].showTime['hourStart']);

          for (let j = 1; j < this.schedule1.length; j++) {
            if (this.schedule1[i].openingDay === this.schedule1[j].openingDay) {
              console.log(this.schedule1[j]);
              this.hour.push(this.schedule1[j].showTime['hourStart']);
              this.schedule1.splice(j, 1);
              j=j-1;
            }
          }

          this.dayHours1 = [this.day, this.hour];
          this.dayHours.push(this.dayHours1);
          this.hour=[];
          this.day=[];
          this.dayHours1 = [];
          this.schedule1.splice(i, 1);
          i=i-1;
        }
        console.log(this.dayHours);
      });
    });
  }

}
