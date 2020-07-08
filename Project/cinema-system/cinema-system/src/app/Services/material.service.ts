import { Injectable } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {MatConfirmDialogComponent} from '../Components/component-viet/mat-confirm-dialog/mat-confirm-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class MaterialService {

  constructor(private dialog: MatDialog) {

  }

  openConfirmDialog(msg) {
    return this.dialog.open(MatConfirmDialogComponent, {
      width: '350px',
      panelClass: 'confirm-dialog-container',
      disableClose: true,
      position: {top: '130px'},
      data: {
        massage: msg
      }
    });
  }
}
