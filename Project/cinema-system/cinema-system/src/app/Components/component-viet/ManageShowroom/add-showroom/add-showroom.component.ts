import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialogRef} from '@angular/material/dialog';
import {ShowroomServiceService} from '../ServiceShowroom/showroom-service.service';
import {NotificationService} from '../../../../Services/notification.service';
import {Router} from '@angular/router';
import {state} from '@angular/animations';

@Component({
  selector: 'app-add-showroom',
  templateUrl: './add-showroom.component.html',
  styleUrls: ['./add-showroom.component.css']
})
export class AddShowroomComponent implements OnInit {
  public formShowroom: FormGroup;
  constructor(public formBuilderShowRoom: FormBuilder,public router: Router,
              public dialogRef: MatDialogRef<AddShowroomComponent>,
              public showroomService:ShowroomServiceService,private notificationService: NotificationService,) { }

  ngOnInit(): void {
    this.formShowroom = this.formBuilderShowRoom.group({
      id: [],
      nameShowroom: [''],
      screen: [''],
    });
console.log(history.state)
  }
addShowroom(){
    const showroom={
      name:this.formShowroom.get('nameShowroom').value,
      screen:this.formShowroom.get('screen').value
    }
    this.showroomService.addNewShowroom(showroom).subscribe(data=>{});
    this.onClose();


  this.notificationService.warn('Thêm phòng chiếu thành công');
  location.reload();

}

  onClose() {
    this.dialogRef.close()
  }

}
