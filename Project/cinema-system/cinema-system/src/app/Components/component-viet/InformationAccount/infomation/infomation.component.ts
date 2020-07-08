import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MemberInformationModule} from '../../Models/memberInformation.module';

import {ActivatedRoute, Router} from '@angular/router';


import {UserServiceService} from '../../../../Services/user-service.service';
import {UserModule} from '../../Models/user.module';
import {InformationAccountService} from "../../../../Services/information-account.service";
import {AuthServices} from "../../../component-vu/service/auth.service";
import {TokenStorageService} from "../../../component-vu/service/token-storage.service";
import {NotificationService} from "../../../../Services/notification.service";
import {MaterialService} from '../../../../Services/material.service';


@Component({
  selector: 'app-infomation',
  templateUrl: './infomation.component.html',
  styleUrls: ['./infomation.component.css']
})
export class InfomationComponent implements OnInit {

  public formMember1: FormGroup;
  public formMember2: FormGroup;
  public authForm:FormGroup;
  public member: MemberInformationModule;
  public user: UserModule;

  constructor(public formBuilderStudentEdit: FormBuilder,
              public memberService: InformationAccountService,
              public userService: UserServiceService,
              public router: Router,
              public activatedRouteService: ActivatedRoute,
              public dialogService: MaterialService,
              private notificationService: NotificationService,
              private authService: AuthServices,
              private tokenStorageService: TokenStorageService) {
  }

  ngOnInit(): void {
    this.formMember1 = this.formBuilderStudentEdit.group({
      id: [],
      idAccount: [''],
      oldPassWord: ['',[Validators.required]],
      newPassWord: ['',[Validators.required]],
      confirmPassWord: ['',[Validators.required]],
      userName: [''],
      password: [''],
    });
    this.formMember2 = this.formBuilderStudentEdit.group({   fullName: ['',[Validators.required,Validators.pattern('^[a-z A-z]*$')]],
      birthday: ['',[Validators.required]],
      gender: ['',[Validators.required]],
      idCard: ['',[Validators.required, Validators.pattern('^[0-9]{9}$')]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}|[0-9]{11}|[0-9]{12}$')]],
      address: ['',[Validators.required]],});


    this.loadDataMemberEdit();
  }

  loadDataMemberEdit() {
    this.activatedRouteService.params.subscribe(data => {
      let id = data['id'];
      let idCustomer;
      this.memberService.getAccountEdit(id).subscribe((member: MemberInformationModule) => {
        this.member = member;
        idCustomer = member['user'].id;
        console.log(idCustomer);
        console.log(this.member);
        console.log(this.formMember1);
        this.userService.getUserEdit(idCustomer).subscribe((user: UserModule) => {
          this.user = user;
          console.log(this.user);
        });
      });
    });
  }

  onEditPassword() {
    this.authForm = this.formBuilderStudentEdit.group({
      username:[this.tokenStorageService.getUser().username],
      password:[this.formMember1.get('oldPassWord').value]
    });
    console.log(this.authForm.value);
    this.dialogService.openConfirmDialog('Are you sure to change this password?').afterClosed().subscribe(data => {
      console.log(data);
      if (data) {
//         this.activatedRouteService.params.subscribe(data1 => {
//           let id = data1['id'];
//           this.userService.getUserEdit(id).subscribe((user: UserModule) => {
//               this.user = user;
//               if (this.formMember1.value.oldPassWord === this.user.password && this.formMember1.value.newPassWord === this.formMember1.value.confirmPassWord) {
// // @ts-ignore
//                 this.user.password=this.formMember1.value.newPassWord;
//
//                 this.userService.updateUser(this.user).subscribe(data2 => {
//                   console.log(data2);
//                   this.notificationService.warn('Change successfully');
//                   this.router.navigateByUrl('');
//                 });
//               } else {
//                 console.log(this.formMember1.value.oldPassWord);
//                 console.log(this.user);
//
//                 console.log('Không đổi đc ');
//                 this.notificationService.warn('Check your old password or new password you have entered');
//               }
//             }
//           );
//         })
        this.authService.checkLogin(this.authForm.value).subscribe(data =>{
            if(this.formMember1.value.newPassWord === this.formMember1.value.confirmPassWord){
              this.userService.updatePassword(this.tokenStorageService.getUser().id,this.formMember1.get('newPassWord').value).subscribe(data =>{
                this.notificationService.warn('Change successfully');
              })
            }else{
              this.notificationService.warn('Check your old password or new password you have entered');
            }
        },
          error => {
            this.notificationService.warn('Your old password is invalid');

          });
      }

    });
}

onEditInformartion(){
  this.dialogService.openConfirmDialog('Are you sure to change information account?').afterClosed().subscribe(data => {
    console.log(data);
    if (data) {
      this.memberService.updateAccount(this.member).subscribe(data3 => {
        console.log(data3);
        this.notificationService.warn('Change successfully');
      });
    }

  });
}
}
