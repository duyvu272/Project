import { Component, OnInit } from '@angular/core';
import {TicketStatusModule} from '../../Models/ticketStatus.module';
import {StatusTicketService} from '../../../../Services/status-ticket.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-ticket-canceled',
  templateUrl: './ticket-canceled.component.html',
  styleUrls: ['./ticket-canceled.component.css']
})
export class TicketCanceledComponent implements OnInit {


  public statusTickets4: TicketStatusModule [];
  public pageCancel: number = 1;
  term: any;
  constructor(public statusTicketService: StatusTicketService,
              public router: Router,
              public activatedRouteService: ActivatedRoute,) { }

  ngOnInit(): void {
    this.loadTickets();
  }

  loadTickets() {
    this.activatedRouteService.params.subscribe(data => {
      let id = data['id'];

      this.statusTicketService.getStatusTickes(id,"cancel").subscribe((statusTicket: TicketStatusModule[]) => {
        this.statusTickets4 = statusTicket;
console.log(this.statusTickets4)
      });
    });
  }
}
