import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-slide-bar-manage-show-room',
  templateUrl: './slide-bar-manage-show-room.component.html',
  styleUrls: ['./slide-bar-manage-show-room.component.css']
})
export class SlideBarManageShowRoomComponent implements OnInit {

  constructor( public router: Router,) { }

  ngOnInit(): void {
  }
showRoomList(){
this.router.navigateByUrl("showRoom")
}
}
