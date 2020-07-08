import { Component, OnInit } from '@angular/core';
import {MemberInformationModule} from '../../Models/memberInformation.module';

import {ActivatedRoute, Router} from '@angular/router';
import {PointHistoryModule} from '../../Models/pointHistory.module';
import {HistoryUsePointService} from '../../../../Services/history-use-point.service';
import {InformationAccountService} from "../../../../Services/information-account.service";

@Component({
  selector: 'app-slide-bar',
  templateUrl: './slide-bar.component.html',
  styleUrls: ['./slide-bar.component.css']
})
export class SlideBarComponent implements OnInit {


  public point: PointHistoryModule [];
  public  memberAvatar:MemberInformationModule;
  public pointSum:number =0;
  id:number;
  constructor(


    public historyUsePointService: HistoryUsePointService,

              public memberService:InformationAccountService,
              public router:Router,
              public activatedRouteService: ActivatedRoute,) { }

  ngOnInit(): void {


    this.loadDataAvarta();
    this.loadPointUser();
  }

  loadDataAvarta() {
    this.activatedRouteService.params.subscribe(data => {
      let id = data['id'];
      console.log(id);
      this.memberService.getAccountEdit(id).subscribe((member:MemberInformationModule) => {
        this.memberAvatar = member;
        console.log(member);
      });
    });

  }


  loadPointUser() {
    this.activatedRouteService.params.subscribe(data => {
      let id = data['id'];
      this.historyUsePointService.getPointAccount(id).subscribe((point: PointHistoryModule[]) => {
        this.point = point;
        console.log(this.point);
        for (let i = 0; i < this.point.length ; i++) {
          this.pointSum=this.pointSum+(this.point[i].pointValue)*1;

        }
        console.log(this.pointSum)
      });
    });
  }

}
