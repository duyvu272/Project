import {Component, OnInit} from '@angular/core';
import {ShowtimesService} from '../../../Services/showtimes.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router } from '@angular/router';

import {FormControl} from '@angular/forms';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';

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
  public listFilmIdHours = [];
  public showtimesFilter = [];
  public show = false;
  public nameFilm;
  public img;
  public hourStarFilm = [];
  public nameHourFilm = [this.nameFilm,this.img ,this.hourStarFilm];
  public nameHourFilm1 = [];
  // date = new FormControl(new Date());
  constructor(private router: Router,
    public showtimerService: ShowtimesService,
    public dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
    this.isFilter = false;
    this.showtimerService.getAllFilm().subscribe(data => {
      this.showtimes = data;
      for (let i = 0; i < this.showtimes.length; i++) {
        this.date.push(this.showtimes[i].openingDay);
      }
      for (let i = 0; i < this.date.length; i++) {
        for (let j = 1; j < this.date.length; j++) {
          if (this.date[i] === this.date[j]) {
            this.date.splice(j, 1);
            j = j - 1;
          }
        }
        break;
      }

      console.log(this.showtimes);
      console.log(this.date);
      // this.date.reset();
    });
    console.log(this.listFilm);

  }

  print(date:string) {
    this.nameHourFilm1=[];
    this.listFilmId1= [];
    this.showtimerService.getAllFilm().subscribe(data => {
      this.showtimes = data;
      for (let i = 0; i < this.showtimes.length; i++) {
        if (date === this.showtimes[i].openingDay) {
          this.listFilm1.push(this.showtimes[i]);
        }
      }
      console.log(this.listFilm1);
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
          this.nameFilm = this.listFilmId1[i][j].movie["movieName"];
          this.img = this.listFilmId1[i][j].movie["srcImg"];
          this.hourStarFilm.push(this.listFilmId1[i][j].showTime["hourStart"])
        }
        this.nameHourFilm = [this.nameFilm,this.img, this.hourStarFilm];
        this.nameHourFilm1.push(this.nameHourFilm);
        this.nameHourFilm = [];
        this.hourStarFilm = [];
        this.img = [];
      }
      console.log(this.listFilmId1);
      console.log(this.nameHourFilm1);
      console.log("this.nameHourFilm1");

    });
  }

  chonGhe(namefilm: any,time: any) {
    this.router.navigate(['chonGhe'] ,{state : { name:namefilm,time :time}});
  }


  // showFilm(date) {
  //   console.log(date);
  // }
  //
  // onSearchChange(searchValue: string): void {
  //   this.isFilter = true;
  //   this.filterByDate(searchValue);
  // }
  //
  // addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
  //   const dtf = new Intl.DateTimeFormat('en', {year: 'numeric', month: '2-digit', day: '2-digit'});
  //   const [{value: mo}, , {value: da}, , {value: ye}] = dtf.formatToParts(this.date.value);
  //   this.isFilter = true;
  //   this.filterByDate(`${mo}/${da}/${ye}`);
  // }
  //
  // filterByDate(date: string) {
  //   let d1 = new Date(date);
  //   this.showtimesFilter = this.showtimes.filter(show => {
  //       let d2 = new Date(show.date);
  //       if (d1.toString() == d2.toString()) {
  //         return show;
  //       }
  //     }
  //   );
  // }
}
