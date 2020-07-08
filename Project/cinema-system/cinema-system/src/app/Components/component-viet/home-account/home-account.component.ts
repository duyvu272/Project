import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MemberInformationModule} from '../Models/memberInformation.module';
import {UserModule} from '../Models/user.module';

import {UserServiceService} from '../../../Services/user-service.service';
import {ActivatedRoute, Router} from '@angular/router';
import {InformationAccountService} from "../../../Services/information-account.service";
import {TokenStorageService} from "../../component-vu/service/token-storage.service";


@Component({
  selector: 'app-home-account',
  templateUrl: './home-account.component.html',
  styleUrls: ['./home-account.component.css']
})
export class HomeAccountComponent implements OnInit {

  public formMemberShow1: FormGroup;
  public formMemberShow2: FormGroup;

  public member: MemberInformationModule;
  public user: UserModule;

  constructor(public formBuilderStudentEdit1: FormBuilder,
              public memberService1: InformationAccountService,
              public userService1: UserServiceService,
              public router: Router,
              public activatedRouteService1: ActivatedRoute,
              private tokenStorageService: TokenStorageService
             ) {
  }

  ngOnInit(): void {
    console.log(this.tokenStorageService.getUser().roles)
    this.formMemberShow1 = this.formBuilderStudentEdit1.group({
      id: [],
      idAccount: [''],
      oldPassWord: ['', [Validators.required]],
      newPassWord: ['', [Validators.required]],
      confirmPassWord: ['', [Validators.required]],
      userName: [''],
      password: [''],


    });
    this.formMemberShow2 = this.formBuilderStudentEdit1.group({
      fullName: ['', [Validators.required, Validators.pattern('^[a-z A-z]*$')]],
      birthday: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      idCard: ['', [Validators.required, Validators.pattern('^[0-9]{9}$')]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}|[0-9]{11}|[0-9]{12}$')]],
      address: ['', [Validators.required]],
    });

    this.loadDataMemberEdit1();
  }

  loadDataMemberEdit1() {
    this.activatedRouteService1.params.subscribe(data => {
      let id = data['id'];
      let idUser;
      this.memberService1.getAccountEdit(id).subscribe((member: MemberInformationModule) => {
        this.member = member;
        idUser = member['user'].id;
        console.log(this.member);
        console.log(this.formMemberShow1);
        this.userService1.getUserEdit(idUser).subscribe((user: UserModule) => {
          this.user = user;
          console.log(this.user);
        });
      });
    });
  }
}
