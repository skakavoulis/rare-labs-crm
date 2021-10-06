import { NotificationsService } from 'src/app/services/notifications.service';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-notifications',
  template: ''
})
export class NotificationsComponent implements OnInit {

  successes: string[] = [];
  errors: string[] = [];

  constructor(private notifications: NotificationsService, private snackbar: MatSnackBar) { }

  ngOnInit(): void {
    this.notifications.successes$
      .subscribe(msg => {
        this.snackbar.open(msg, 'dismiss',
          {
            duration: 10000,
            politeness: 'assertive',
            verticalPosition: 'top'
          });
      })
    this.notifications.errors$
      .subscribe(msg => {
        this.snackbar.open(msg, 'dismiss',
          {
            duration: 10000,
            politeness: 'assertive',
            verticalPosition: 'top',
            panelClass: 'gradient-red'
          });
      });
  }

}
