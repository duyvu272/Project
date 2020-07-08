import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { FilmService} from '../../../services/film.service'
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment/moment';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  isLinear = false;
  public firstFormGroup: FormGroup;
  public secondFormGroup: FormGroup;
  public thirdFormGroup: FormGroup;
  public films;
  public days;
  public hours;
  public ticketId: any;
  public ticket;
  public dateF;
  public hourStart;
  public hourEnd;
  public movie;
  public dateStart;
  public dateEnd;
  public dayList;
  public timeList;
  public times=[]

  public date:string;
  public i:any;
 

  constructor(
    private _formBuilder: FormBuilder,
    public filmService: FilmService,
    public id: FilmService,
    public activatedRoute : ActivatedRoute
  ) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
   
    this.filmService.getAllFilms().subscribe(data =>{
      this.films=data;
    });

    this.movie=history.state.movie;
    console.log("data cua tuan",history.state.movie);
  }

 getHour(){
let x = 45;
// let times = [];
let tt = 120*4+30;
let ap = ['AM','PM'];

for(var i = 0;tt<22*60;i++ ){
  var hh = Math.floor(tt/60);
  var mm = (tt%60);
 //  times[i] = ("" + ((hh==12)?12:hh%12)).slice(-2) + ':' + ("0" + mm).slice(-2) + ap[Math.floor(hh/12)];
 this.times[i] = ("0" + hh ).slice(-2) + ':' + ("0" + mm).slice(-2) ;
  tt= tt + x
}
this.timeList  = this.times;
 }

getI()
{
    
 
  
          this.dateStart = this.movie.dateStart;
          this.dateEnd = this.movie.dateEnd;
        
      
      this.dayList = this.daybetween(this.dateStart, this.dateEnd); 
      console.log("popop",this.dayList);
  
}
 daybetween(from,to){
  const fromDate = moment(new Date(from)).startOf('day');
  const toDate = moment(new Date(to)).endOf('day');
  
  const span = moment.duration(toDate.diff(fromDate)).asDays();
  const days = [];
  console.log(span)

  for(let i = 0 ;i <= span; i++){
    days.push(moment(fromDate).add(i,'day').startOf('day'));
  }

  return days;
}
}
