import {Component, OnInit} from '@angular/core';
import {ShowroomServiceService} from '../ServiceShowroom/showroom-service.service';
import {SeatModule} from '../Model/Seat.module';
import {NotificationService} from '../../../../Services/notification.service';
import {MaterialService} from '../../../../Services/material.service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {AddSeatComponent} from '../add-seat/add-seat.component';
import {AddShowroomComponent} from '../add-showroom/add-showroom.component';


@Component({
  selector: 'app-showroom-details',
  templateUrl: './showroom-details.component.html',
  styleUrls: ['./showroom-details.component.css']
})
export class ShowroomDetailsComponent implements OnInit {
  public idShowroom;
  public seatShowroom;
  public seatModel: SeatModule;

  constructor(public seatService: ShowroomServiceService,
              private notificationService: NotificationService,
              public dialogService: MaterialService,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {
    console.log(history.state);
    this.idShowroom = history.state[0];
    console.log(this.idShowroom);
    this['seatShowroom'] = history.state[3];
    console.log(this.seatShowroom);

  }

  changeTypeSeat(i: number) {
    this.dialogService.openConfirmDialog('Bạn có chắc chắn đổi loại ghế này?').afterClosed().subscribe(data => {
      console.log(data);
      if (data) {
        this.seatShowroom[i].vip = !this.seatShowroom[i].vip;
        this.seatModel = {
          id: this.seatShowroom[i].id,
          seatNumber: this.seatShowroom[i].seatNumber,
          name: this.seatShowroom[i].name,
          row: this.seatShowroom[i].row,
          vip: this.seatShowroom[i].vip,
          selecting: this.seatShowroom[i].selecting,
          booked: this.seatShowroom[i].selecting
        }
        console.log(this.seatModel);
        this.seatService.updateSeat(this.seatModel).subscribe(data => {
          console.log(data);
          this.notificationService.warn('Đổi loại gế thành công');
        });
      }
    });
  }

  addSeat() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '30%';
    this.dialog.open(AddSeatComponent, dialogConfig)
  }


}
