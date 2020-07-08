import { Component, OnInit } from '@angular/core';
import { CustomerService } from './../../../Services/customer.service';
import { ActivatedRoute } from '@angular/router'
import { HttpService } from "./../../../Services/http.service";
@Component({
  selector: 'app-ticket-confirm',
  templateUrl: './ticket-confirm.component.html',
  styleUrls: ['./ticket-confirm.component.css']
})
export class TicketConfirmmComponent implements OnInit {
	ticket: any;
  customer: any;
  movie: any;
  showRoom: any;
  movieSchedules: any;
  seat: any;
  constructor(private myHttp: HttpService) {}

  ngOnInit(): void {
    console.log(history.state);
    this.ticket = history.state.ticket;
    this.showRoom = this.ticket.seat[0].row.showRoom;
    this.movie = this.ticket.movieSchedules.movie;
    this.customer = this.ticket.customer;
    this.movieSchedules = this.ticket.movieSchedules;
    this.seat = this.ticket.seat;
  }

}
