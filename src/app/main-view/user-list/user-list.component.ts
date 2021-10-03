import { UserService } from './../../services/user.service';
import { Component, Input, OnInit } from '@angular/core';
import { UserFromList } from 'src/app/services/user-from-list';
import { NotificationsService } from 'src/app/services/notifications.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  constructor(public userService: UserService, private notification: NotificationsService) { }

  async ngOnInit(): Promise<void> {
    await this.userService.loadUsers();
  }

  async deleteUser(userId: number) {
    const result = await this.userService.deleteUser(userId);
    this.handleResult(
      result,
      'User was deleted successfuly',
      `The user could not be deleted: ${result?.error?.message}`
    );
    await this.userService.loadUsers();
  }

  private handleResult(result: any, successMessage: string, errorMessage: string) {
    if (result.success) {
      this.notification.success(successMessage);
    } else {
      this.notification.error(errorMessage);
    }
  }


}
