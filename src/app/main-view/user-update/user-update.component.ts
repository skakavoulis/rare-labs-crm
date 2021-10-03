import { NotificationsService } from 'src/app/services/notifications.service';
import { UserService } from './../../services/user.service';
import { UserFull } from './../../services/user-from-list';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.scss']
})
export class UserUpdateComponent implements OnInit {

  user?: UserFull;
  routeSub: Subscription = Subscription.EMPTY;
  phone?: number;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private notification: NotificationsService
  ) { }

  async ngOnInit(): Promise<void> {
    this.routeSub = this.route.params.subscribe(async params => {
      const id = params['id'];
      this.user = await this.userService.getUser(id);
      this.phone = this.user?.phoneNumber
    });
  }

  async updateUser(phoneNumber: number) {
    const id = this.user?.id || 0;
    const result = await this.userService.updateUser(id, phoneNumber);
    if (result.success) {
      this.notification.success('User was updated successfuly');
    } else {
      this.notification.error(result.error.message);
    }
  }

}
