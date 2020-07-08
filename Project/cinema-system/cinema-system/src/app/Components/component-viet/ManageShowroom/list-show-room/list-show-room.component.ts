import { Component, OnInit } from '@angular/core';
import {ShowroomServiceService} from '../ServiceShowroom/showroom-service.service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {AddShowroomComponent} from '../add-showroom/add-showroom.component';
import {MaterialService} from '../../../../Services/material.service';
import {Router} from '@angular/router';
import {state} from '@angular/animations';

@Component({
  selector: 'app-list-show-room',
  templateUrl: './list-show-room.component.html',
  styleUrls: ['./list-show-room.component.css']
})
export class ListShowRoomComponent implements OnInit {

  public searchTerm: string;
  public p: number = 1;

  public showrooms;
  public seats;
  public idShowRoom;
  public nameShowRoom;
  public seatsFollowShowroom=[];
  public idNameNumber=[];
  public showroomDetails=[];
  constructor(public showRoomService: ShowroomServiceService,
              public dialogService: MaterialService,
              private dialog: MatDialog,public router: Router,) { }

  ngOnInit(): void {
//Lấy ra tên và id showroom
    this.showRoomService.getAllShowRoom().subscribe(data => {
      this.showrooms = data;

// Lấy tất cả các gế gế
      this.showRoomService.getAllSeat().subscribe(data => {
        this.seats = data;
        console.log(this.showrooms);
        console.log(this.seats);
      for (let i = 0; i < this.showrooms.length ; i++) {
        this.idShowRoom=this.showrooms[i].id;
        this.nameShowRoom=this.showrooms[i].name;
        for (let j = 0; j <this.seats.length ; j++) {
          if(this.seats[j].row["showRoom"].id===this.showrooms[i].id){
            this.seatsFollowShowroom.push(this.seats[j])
          }
        }
        this.idNameNumber=[this.idShowRoom,this.nameShowRoom,this.seatsFollowShowroom.length,this.seatsFollowShowroom]
        this.showroomDetails.push(this.idNameNumber)
        this.seatsFollowShowroom=[];
        this.idNameNumber=[];
// console.log(this.showroomDetails)
      }
      });
    });


  }


  addShowRoom() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '30%';
    this.dialog.open(AddShowroomComponent, dialogConfig);

;  }


}

