import { Component, OnInit } from '@angular/core';
import { CustomerService } from './../../../Services/customer.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ticket-confirm-info',
  templateUrl: './ticket-confirm-info.component.html',
  styleUrls: ['./ticket-confirm-info.component.css']
})
export class TicketConfirmmInfoComponent implements OnInit {
	  public ticketId;
  public ticket;

  constructor(
  	public customerService: CustomerService,
  	public router: Router,
  	public activatedRoute: ActivatedRoute
  	) { }

  ngOnInit(): void {
  	this.activatedRoute.params.subscribe(data => {
      this.ticketId = data.id;
    this.customerService.getTicketById(this.ticketId).subscribe(data => {
      this.ticket = data;
      console.log(this.ticket)
  })
  })
  }

}
