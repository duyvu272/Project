import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {StatusTicketService} from '../../../../Services/status-ticket.service';

import {TicketStatusModule} from '../../Models/ticketStatus.module';

@Component({
  selector: 'app-ticket-booking',
  templateUrl: './ticket-booking.component.html',
  styleUrls: ['./ticket-booking.component.css']
})
export class TicketBookingComponent implements OnInit {



  public statusTickets1: TicketStatusModule [];
  public statusTickets2: TicketStatusModule [];
  public statusTickets3: TicketStatusModule [];
  public page: number = 1;
  term1: any;
  constructor(public statusTicketService: StatusTicketService,
              public router: Router,
              public activatedRouteService: ActivatedRoute,) { }

  ngOnInit(): void {
    this.loadTickets();
  }

  loadTickets() {
    this.activatedRouteService.params.subscribe(data => {
      let id = data['id'];
      this.statusTicketService.getStatusTickes(id,"done").subscribe((statusTicket: TicketStatusModule[]) => {
       this.statusTickets1 = statusTicket;
      this.statusTicketService.getStatusTickes(id,"waiting").subscribe((statusTicket1: TicketStatusModule[]) => {
       this.statusTickets2 = statusTicket1;
        console.log(this.statusTickets1);
        console.log(this.statusTickets2);
        this.statusTickets3=this.statusTickets1.concat(this.statusTickets2);
        console.log( this.statusTickets3[1].movieSchedules["movie"].movieName)

      });
      });
    });
  }
}
