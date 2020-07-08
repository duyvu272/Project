
import { Component, OnInit } from "@angular/core";
import {HttpService} from "../../../Services/http.service";

@Component({
  selector: "app-ticket-booking-information",
  templateUrl: "./ticket-booking-information.component.html",

  styleUrls: ["./ticket-booking-information.component.css"],
})
export class TicketBookingInformationComponent implements OnInit {
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

    // this.myHttp
    //   .getById(
    //     `movies/movie-schedule/`,
    //     this.customer.tickets[0].movieSchedules.id
    //   )
    //   .subscribe((movie) => {
    //     this.movie = movie;
    //     console.log("customer", this.customer);
    //     console.log("movie", this.movie);
    //   });
  }
}
