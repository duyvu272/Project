import {Component} from '@angular/core';
import {TokenStorageService} from "./Components/component-vu/service/token-storage.service";
import {UserService} from "./Components/component-vu/service/user.service";
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cinemaSystem';

  private roles: string[];
  isLoggedIn = false;
  username: string;
  id: number;
  loadPage: false;
  showAdminBoard = false;
  constructor(private tokenStorageService: TokenStorageService,
              private userService: UserService,
              private cookieService: CookieService) {
  }

  ngOnInit() {

    if (this.cookieService.check('data-access')) {
      this.tokenStorageService.saveToken(this.cookieService.get('data-access'));

    }
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    console.log(this.cookieService.getAll());

    if (this.isLoggedIn) {
      if (this.cookieService.check('username')) {
        this.userService.getUserByUserName(this.cookieService.get('username')).subscribe(data => {
          this.tokenStorageService.saveUser(data);
        });
      }
      if(this.tokenStorageService.getUser()===null){
        window.location.reload();
      }
      console.log(this.tokenStorageService.getUser())
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.userService.getAllCustomer().subscribe(data => {
        for (const item of data) {
          if (item['user'].id === user.id) {
            this.id = item.id;
          }
        }
      });
      console.log(this.id);
      this.username = user.username;
      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');


    }
  }

  logout() {
    this.tokenStorageService.signOut();
    window.location.assign('login');
    this.cookieService.deleteAll();
  }
}
