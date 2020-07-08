import {Component, OnInit} from '@angular/core';
import {TicketService} from "../../service/ticket.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-booking-ticket',
  templateUrl: './booking-ticket.component.html',
  styleUrls: ['./booking-ticket.component.css']
})
export class BookingTicketComponent implements OnInit {
  listTicket: Array<any> = [];
  page: 1;
  search: string;

  constructor(private ticketService: TicketService,

              private router: Router) {
  }

  ngOnInit(): void {
    this.ticketService.getAllTicket().subscribe(data => {
      for (const item of data) {
        item.id = 'BV' + item.id;
        item['customer']['user'].id = 'TV' + item['customer']['user'].id;
        this.listTicket.push(item);
      }
      console.log(this.listTicket);
    });
  }

  nextPage(id: any) {
    const idTicket = id.slice(2);
    this.router.navigate(['confirm-booking',idTicket]);
  }

  inforConfirm(id: any) {
    console.log(id);
    const idPoint = id.slice(2);
this.ticketService.getAllPoint().subscribe(data => {
  for (const item of data){
    if(  item.idTicket == idPoint){
      this.router.navigate(['information-confirm',item.id]);
    }
  }
})
  }
}
