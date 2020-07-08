import {Component, OnInit} from '@angular/core';
import {TicketPriceService} from '../../../Services/ticket-price.service';

@Component({
  selector: 'app-see-ticker-prices',
  templateUrl: './see-ticker-prices.component.html',
  styleUrls: ['./see-ticker-prices.component.css']
})
export class SeeTickerPricesComponent implements OnInit {
  public ticket;
  constructor(
    public ticketPriceService: TicketPriceService,
  ) {
  }
  ngOnInit(): void {
    this.ticketPriceService.getAllTicketPrice().subscribe(data =>{
      this.ticket = data;
    })
  }
}
