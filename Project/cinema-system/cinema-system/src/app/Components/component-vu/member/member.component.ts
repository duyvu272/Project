import { Component, OnInit } from '@angular/core';
import {UserService} from "../service/user.service";

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {
  context: string;
  constructor( private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUserBoard().subscribe(data =>{
      this.context=data.hello
    }, error => {
      console.log(error)
      this.context = "Không được vào đây bạn ei";
    });
  }

}
