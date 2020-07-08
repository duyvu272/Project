import {Component, OnInit} from '@angular/core';
import {BanVeService} from '../../../Services/ban-ve.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpService} from '../../../Services/http.service';

@Component({
  selector: 'app-chon-ghe',
  templateUrl: './chon-ghe.component.html',
  styleUrls: ['./chon-ghe.component.css']
})
export class ChonGheComponent implements OnInit {
  showRoom: any;
  ticket: any;
  movie: any;
  movieSchedules: any;
  rows: any;
  seats = [];

  SeatColors: any;
  selectingSeatCount = 0;
  selectedSeats = [];
  rowNames = [
    'A', 'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
  ];
  formGroup = new FormGroup({
    seatAmount: new FormControl(1, [Validators.min(1), Validators.required]),
  });

  constructor(private myHttp: HttpService, private router: Router) {
  }

  ngOnInit(): void {
    this.myHttp.getById('tickets', 1).subscribe((ticket) => {
      this.ticket = ticket;
      this.movie = this.ticket.movieSchedules.movie;
      this.movieSchedules = this.ticket.movieSchedules;
    });
    this.myHttp.getById('show-rooms', 1).subscribe((showRoom) => {
      this.showRoom = showRoom;
      this.myHttp
        .getById('rows/show-room', this.showRoom.id)
        .subscribe((rows) => {
          this.rows = rows;
          (this.rows as Array<any>).map((row) => {
            this.myHttp.getById('seats/row', row.id).subscribe((seats) => {
              this.seats.push(seats);
            });
          });
        });
    });
    this.SeatColors = SeatColors;
  }
  getSeatsByRow(row: any) {
    let seats;
    return seats;
  }

  onSubmit() {
    this.ticket.seat = this.selectedSeats;
    this.router.navigate(['thong-tin-dat-ve'], {
      state: {
        ticket: this.ticket,
      },
    });
  }

  onSeatSelect(seat: any) {
    if (seat.booked) return;

    seat.selecting = !seat.selecting;
    if (!seat.selecting) {
      --this.selectingSeatCount;
      this.selectedSeats.splice(this.selectedSeats.indexOf(seat), 1);
    } else {
      ++this.selectingSeatCount;
      this.selectedSeats.push(seat);
    }
    this.handleSubmission();
  }

  handleSubmission() {
    this.formGroup.setErrors(
      this.selectingSeatCount === this.formGroup.get('seatAmount').value
        ? {}
        : {unequalOptions: true}
    );
  }
}

enum SeatColors {
  BookedSeat = 'bg-danger',
  SelectingSeat = 'bg-success',
  VipSeat = 'bg-info',
}
