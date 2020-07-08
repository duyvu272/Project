import {Component, OnInit} from '@angular/core';
import {TicketService} from "../../service/ticket.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";
import {NotificationService} from "../../../../Services/notification.service";

declare var paypal;
declare var $: any;

@Component({
  selector: 'app-confirm-booking',
  templateUrl: './confirm-booking.component.html',
  styleUrls: ['./confirm-booking.component.css']
})
export class ConfirmBookingComponent implements OnInit {
  ticket: any;
  customer: any;
  idTecket: any;
  idCustomer: number;
  sumPoint: number;
  subPoint: number;
  point: number;
  form: FormGroup;
  paidFor = false;

  constructor(private ticketService: TicketService,
              private route: ActivatedRoute,
              private fb: FormBuilder,
              private router: Router,
              private notificationService: NotificationService) {
  }

  ngOnInit(): void {
    let money;
    let num1, num2;
    this.idTecket = +this.route.snapshot.paramMap.get('id');

    this.ticketService.getTicketById(this.idTecket).subscribe(data => {
      this.customer = data['customer'];
      this.idCustomer = data['customer'].id;
      this.ticket = data;
      money = Number(this.ticket.price / 23000).toFixed(2);

      this.ticketService.getSumPoint(this.idCustomer).subscribe(data => {
        num1 = data;
        console.log(num1)
        this.ticketService.getSubPoint(this.idCustomer).subscribe(data => {
          num2 = data;
          console.log(num2)
          this.point = num1 - num2;
          console.log(this.point);
        },error => {
          console.log('fail');
          this.point = num1;
        });

      },error => {
        this.point = 0;
      });

    });
    this.form = this.fb.group({
      use_point: [null]
    });


// create paypal button

    paypal
      .Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                description: this.ticket['movieSchedules']['movie'].movieName,
                amount: {
                  currency_code: 'USD',
                  value: money
                }
              }
            ]
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          this.paidFor = true;
          $('#showPaypal').hide();
          this.notificationService.warn('Success');
          console.log(order);
        },
        onError: err => {
          console.log(err);
        },
        style: {
          color: 'blue',
          shape: 'pill',
          label: 'pay',
          height: 40,
        }
      })
      .render('#showPaypal');

    //hide paypay button
    $('#showPaypal').hide();


    $(document).ready(function () {
      $('input[type="radio"]').change(function () {
        console.log(money)
        var rado_value = $(this).val();
        if (rado_value === "paypal") {
          $('#showPaypal').show();
          $('#submit').hide();
        } else {
          $('#showPaypal').hide();
          $('#submit').show();
        }
      });
    });

  }

  submit() {
    const value = this.form.get('use_point').value;
    console.log(value);
    if (value == 0 || value === null) {
      this.router.navigate(['booking-ticket']);
    } else {
      const money = value * this.ticket.price;
      console.log(money);
      if (money > this.point) {
        this.notificationService.warn('Không đủ điểm đổi vé');
      } else {
        const newPoint = {
          nameMovie: this.ticket['movieSchedules']['movie'].movieName,
          pointValue: money,
          pointStatus: "Use",
          dateCreate: new Date(),
          customer: this.customer,
          idTicket: this.ticket.id
        }

        this.ticketService.addNewPoint(newPoint).subscribe(data => {
          console.log(data)
          this.router.navigate(['information-confirm', data.id]);
        });
      }
    }
  }

  submitPaypal() {
    const money = this.ticket.price * 0.1;
    console.log(money)
    const newPoint = {
      nameMovie: this.ticket['movieSchedules']['movie'].movieName,
      pointValue: money,
      pointStatus: "Plus",
      dateCreate: new Date(),
      customer: this.customer,
      idTicket: this.ticket.id
    }
    this.ticketService.addNewPoint(newPoint).subscribe(data => {
      console.log(data)
      this.router.navigate(['information-confirm', data.id]);
    });
  }
}
