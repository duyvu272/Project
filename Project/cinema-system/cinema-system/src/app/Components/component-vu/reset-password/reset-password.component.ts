import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {UserService} from "../service/user.service";
import {NotificationService} from "../../../Services/notification.service";
declare let Email: any;
export interface Email1 {
  email: string
}

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  emails: Array<Email1> = [];
  formReset: FormGroup;
  message: string;
  check: boolean;


  constructor(private router: Router,
              private fb: FormBuilder,
              private userService: UserService,
              private notificationService: NotificationService) {
  }

  ngOnInit(): void {

    this.formReset = this.fb.group({
      email: [null, Validators.required]
    });

    this.userService.getAllCustomer().subscribe(data => {
      for (const item of data) {
        this.emails.push(item.email);
      }
    });
  }

  sentToEmail() {
    this.check = false;
    console.log(this.emails);
    const emailT = this.formReset.get('email').value;
        this.userService.getAllCustomer().subscribe(data => {
          for (const item of data) {
            if (item.email === emailT) {
              this.check = true;
              Email.send({
                Host: 'smtp.elasticemail.com',
                Username: 'kingdomstory272@gmail.com',
                Password: 'A88DD81B7C271836D619D698C97AD44E4B72',
                To: emailT,
                From: 'kingdomstory272@gmail.com',
                Subject: 'Reset Password mail',
                Body: '<i>This is sent as a feedback from my resume page.</i> <br/> <i>Link: http://localhost:4200/confirmPassword/' + item['user'].id + '</i><br><br> <b>~End of Message.~</b> '
              }).then(message => {
                console.log(message);
              });
              this.notificationService.warn('Check your email to reset password');
              return;
            }
          }
        },error => {
          this.message = "Email invalid";
          console.log("fail roi");
        });
        if(!this.check){
          this.message = "Email invalid";
          console.log("fail roi");
        }
  }
}
