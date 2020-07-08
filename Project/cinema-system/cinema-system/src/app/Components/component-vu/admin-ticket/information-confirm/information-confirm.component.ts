import { Component, OnInit } from '@angular/core';
import {TicketService} from "../../service/ticket.service";
import {ActivatedRoute, Router} from "@angular/router";
import {NotificationService} from "../../../../Services/notification.service";

@Component({
  selector: 'app-information-confirm',
  templateUrl: './information-confirm.component.html',
  styleUrls: ['./information-confirm.component.css']
})
export class InformationConfirmComponent implements OnInit {
  ticket: any;
  idTicket: any;
  idCustomer: number;
  amountTicket:number;
  point:any;
  idTicket1:number;
  constructor(private ticketService: TicketService,
              private route: ActivatedRoute,
              private router: Router,
              private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.idTicket = +this.route.snapshot.paramMap.get('id');
    console.log(this.idTicket);
    this.ticketService.getPointById(this.idTicket).subscribe(data => {
        this.point = data;
        if(this.point.pointStatus === "Plus"){
          this.point.pointValue = 0;
        }
      this.ticketService.getTicketById(data.idTicket).subscribe(data1 =>{
        this.ticket = data1;
        this.idTicket1 = data1.id;
        this.amountTicket = this.point.pointValue/this.ticket.price;
      });

    });

  }

  submit() {
    this.ticketService.updateOrderStatus(this.idTicket1).subscribe(data1 =>{
      console.log(data1);
      this.router.navigate(['booking-ticket']);
    });

  }
}
