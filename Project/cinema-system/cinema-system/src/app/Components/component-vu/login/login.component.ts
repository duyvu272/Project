import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

import {Router} from '@angular/router';
import {UserService} from '../service/user.service';
import {TokenStorageService} from "../service/token-storage.service";
import {AuthServices} from "../service/auth.service"
import {AuthService, FacebookLoginProvider, SocialUser} from "angularx-social-login";
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLoggedIn = false;
  isLoginFailed = true;
  errorMessage = '';
  roles: string[] = [];
  formLogin: FormGroup;
  listUserName: Array<any> = [];
  listPassword: Array<any> = [];
  checkUsername: boolean;
  checkPassword: boolean;
  count = 1;
  checkStatus: boolean;
  check: boolean;
  formTest: FormGroup;
  cookie: string;
  rememberMe: false;

  constructor(private authService: AuthServices, private tokenStorage: TokenStorageService,
              public OAuth: AuthService,
              private userService: UserService,
              private router: Router,
              private fb: FormBuilder,
              private cookieService: CookieService
  ) {
  }


  ngOnInit() {
      console.log(this.cookieService.getAll());
    this.formLogin = this.fb.group({
      username1: [null, Validators.required],
      password1: [null, Validators.required]
    });
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
    this.userService.getListUser().subscribe(data => {
      for (const item of data) {
        this.listUserName.push(item.username);
        this.listPassword.push(item.password);
      }
    });
    console.log(this.listUserName);
  }


  onSubmit() {
    this.checkStatus = false;
    const username = this.formLogin.get('username1').value;
    this.checkUsername = false;
    this.checkPassword = false;
    console.log(this.formLogin.value);
    if (this.formLogin.valid) {
      if (this.isValidName()) {
        this.userService.getListUser().subscribe(data => {
          for (const item of data) {
            if (item.username === username) {
              if (item.status === true) {
                this.errorMessage = "Your account has been locked";
                this.checkStatus = true;
                break;
              }
            }
          }
        });

        if (this.count === 5 || this.checkStatus) {
          this.checkStatus = true;
          this.userService.getListUser().subscribe(data => {
            for (const item of data) {
              if (item.username === username) {
                this.userService.updateUser(item.id).subscribe();
              }
            }
          });
          this.errorMessage = "Your account has been locked";
        } else {
          this.authService.login(this.formLogin.value).subscribe(
            data => {
              this.tokenStorage.saveToken(data.accessToken);
              this.tokenStorage.saveUser(data);
              this.roles = this.tokenStorage.getUser().roles;
              if(this.rememberMe){
                this.cookieService.set('data-access',this.tokenStorage.getToken());
                this.cookieService.set('username',this.tokenStorage.getUser().username);
              }
              window.location.assign('#');
            },
            err => {
              this.isLoginFailed = true;
              this.count++;
              this.checkPassword = true;
            }
          );
        }
      } else {
        this.checkUsername = true;
      }
    } else {
      this.validateAllFormFields(this.formLogin);
    }
  }

  //facebook
  LoginByFacebook() {
    console.log('hello');
    let socialPlatformProvider;
    let username;
    socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    this.OAuth.signIn(socialPlatformProvider).then(socialusers => {
      this.userService.getAllCustomer().subscribe(data => {
        for (const item of data) {
          if (socialusers.email === item.email) {
            this.check = true;
            username = item['user'].username;
            break;
          }
        }
        this.formTest = this.fb.group({
          username1: [username],
          password1: [123456]
        });

        if (this.check) {
          this.authService.login(this.formTest.value).subscribe(
            data1 => {
              this.tokenStorage.saveToken(data1.accessToken);
              this.tokenStorage.saveUser(data1);
              this.isLoginFailed = false;
              this.isLoggedIn = true;
              this.roles = this.tokenStorage.getUser().roles;
              window.location.assign('#');
            });

        } else {
          this.Savesresponse(socialusers);
        }
      });
    });

  }

  Savesresponse(user: SocialUser) {
    const userTest = {
      fullName: user.name,
      gender: 'Na',
      idCard: 'Na',
      email: user.email,
      phone: 'Na',
      address: 'Na',
      user: {
        password: '123456',
        username: user.lastName,
        roles: [
          {
            id: 2,
            name: 'ROLE_USER'
          }
        ]
      },
      "birthday": "1991-02-27"
    }
    this.formTest = this.fb.group({
      username1: [user.lastName],
      password1: [123456]
    });
    this.userService.addCustomer(userTest).subscribe(data => {
      console.log('success');
      this.authService.login(this.formTest.value).subscribe(
        data1 => {
          this.tokenStorage.saveToken(data1.accessToken);
          this.tokenStorage.saveUser(data1);
          this.isLoginFailed = false;
          this.isLoggedIn = true;
          this.roles = this.tokenStorage.getUser().roles;
          window.location.assign('#');
        });

    });
  }

  isFieldValidUser(field: string): boolean {
    return this.formLogin.get(field).touched && !this.formLogin.get(field).valid;
  }

  isFieldValidPassword(field: string) {
    return this.formLogin.get(field).touched && !this.formLogin.get(field).valid;
  }

  isValidName(): boolean {
    const username = this.formLogin.get('username1').value;
    for (const item of this.listUserName) {
      if (item === username) {
        return true;
      }
    }
    return false;
  }

  isValidPass(): boolean {
    const pass = this.formLogin.get('password1').value;
    for (const item of this.listPassword) {
      if (item === pass) {
        return true;
      }
    }
    return false;
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      console.log(field);
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({onlySelf: true});
      }
    });
  }


  checkRemember(event :any) {
    this.rememberMe = event.checked;
  }
}
