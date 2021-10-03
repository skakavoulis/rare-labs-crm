import { NotificationsService } from 'src/app/services/notifications.service';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {

  successes: string[] = [];
  errors: string[] = [];

  constructor(private notifications: NotificationsService) { }

  ngOnInit(): void {
    this.notifications.successes$
      .subscribe(msg => {
        this.successes.push(msg);
        this.autoRemove(msg, this.successes);
      })
    this.notifications.errors$
      .subscribe(msg => {
        this.errors.push(msg);
        this.autoRemove(msg, this.errors);
      })
  }


  private autoRemove(msg: string, array: string[]) {
    setTimeout(() => {
      const index = array.indexOf(msg);
      if (index > -1) {
        array.splice(index, 1);
      }
    }, environment.notificationsAutoRemoveTicks);
  }
}
