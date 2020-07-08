import { Component, OnInit } from '@angular/core';


import {ActivatedRoute, Router} from '@angular/router';
import {HistoryUsePointService} from '../../../../Services/history-use-point.service';
import {PointHistoryModule} from '../../Models/pointHistory.module';

@Component({
  selector: 'app-history-ticket',
  templateUrl: './history-ticket.component.html',
  styleUrls: ['./history-ticket.component.css']
})
export class HistoryTicketComponent implements OnInit {

  public history: PointHistoryModule [];

  public from:string;
  public to:string;
  public checkPoint:string;
  public p: number = 1;
  term: string;
  constructor(public historyUsePointService: HistoryUsePointService,
              public router: Router,
              public activatedRouteService: ActivatedRoute,) { }

  ngOnInit(): void {
    this.loadPointUser();
    this.from="dd-MM-yyyy"
    this.to="dd-MM-yyyy"
  }

  loadPointUser() {
    this.activatedRouteService.params.subscribe(data => {
      let id = data['id'];
      this.historyUsePointService.getPointAccount(id).subscribe((point: PointHistoryModule[]) => {
        this.history = point;
        console.log(this.history);

      });
    });
  }

  searchPointUser() {
    this.activatedRouteService.params.subscribe(data => {
      let id = data['id'];
      let from=this.from;
      let to=this.to;
      let checkPoint=this.checkPoint;
      this.historyUsePointService.getSearchPointAccount(id,from,to,checkPoint).subscribe((point: PointHistoryModule[]) => {
        this.history = point;
        console.log(this.history);

      });
    });
  }
  onSubmit() {
    this.searchPointUser();
    console.log(this.from);
    console.log(this.to);
  }

}
