import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ShowroomServiceService} from '../ServiceShowroom/showroom-service.service';
import {SeatModule} from '../Model/Seat.module';
import {MatDialogConfig, MatDialogRef} from '@angular/material/dialog';
import {ActivatedRoute, Router} from '@angular/router';
import {NotificationService} from '../../../../Services/notification.service';

@Component({
  selector: 'app-add-seat',
  templateUrl: './add-seat.component.html',
  styleUrls: ['./add-seat.component.css']
})
export class AddSeatComponent implements OnInit {


  public formSeat: FormGroup;
  public isVip: boolean;
  public rowSeat: { id: number }


  constructor(public formBuilderSeat: FormBuilder,
              public seatService: ShowroomServiceService,
              public dialogRef: MatDialogRef<AddSeatComponent>, public router: Router,
              private notificationService: NotificationService,) {
  }

  ngOnInit(): void {
    this.formSeat = this.formBuilderSeat.group({
      id: [],
      name: [''],
      isVip: ['', [Validators.required]],
      row: [''],
      seatNumber: [''],
    });

}

  addSeat() {
    console.log(this.formSeat);
    if (this.formSeat.get('isVip').value === 'true') {
      this.isVip = true
    } else {
      this.isVip = false
    }
    this.rowSeat = {
      id: this.formSeat.get('row').value * 1
    };
    // @ts-ignore
    // @ts-ignore
    const seat = {
      name: this.formSeat.get('name').value,
      seatNumber: this.formSeat.get('seatNumber').value * 1,
      row: this.rowSeat,
      vip: this.isVip,
      booked: false,
      selecting: false,
    }
    console.log(seat);
    this.seatService.addNewSeat(seat).subscribe(data => {
    });
    this.onClose();
     history.state[3].push(seat);
     this.notificationService.warn('Thêm ghế thành công')
  }

  onClose() {
    this.dialogRef.close()
  }


}
