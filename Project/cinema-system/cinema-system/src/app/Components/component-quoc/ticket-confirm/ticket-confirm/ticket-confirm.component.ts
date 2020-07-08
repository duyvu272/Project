import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../../../services/customer.service';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-ticket-confirm',
  templateUrl: './ticket-confirm.component.html',
  styleUrls: ['./ticket-confirm.component.css']
})
export class TicketConfirmComponent implements OnInit {

  public customers;
  public term;
  public p;
  public ticketId;
  public ticket;
  constructor(
    public customerService: CustomerService,
    public activatedRoute : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.ticketId = data.id;
    this.customerService.getTicketById(this.ticketId).subscribe(data => {
      this.ticket = data;
      console.log(this.ticket)
  })
  })
  	this.customerService.getAllCustomers().subscribe(x => {
      this.customers = x;
    })
  }

}

