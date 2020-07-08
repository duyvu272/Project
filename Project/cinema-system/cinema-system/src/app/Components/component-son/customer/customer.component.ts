import { Component, OnInit } from '@angular/core';
import { CustomerService } from './../../../Services/customer.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

	public customerId;
	public customer;
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
  	
  	this.activatedRoute.params.subscribe(data => {
  		this.customerId = data.id;
  	this.customerService.getCustomerById(this.customerId).subscribe(data => {
  		this.customer = data;
  })
  })
  }

}
