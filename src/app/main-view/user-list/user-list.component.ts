import { UserService } from './../../services/user.service';
import { Component, Input, OnInit } from '@angular/core';
import { UserFromList } from 'src/app/services/user-from-list';
import { NotificationsService } from 'src/app/services/notifications.service';
import { Settings } from 'src/app/app.settings.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  public page: any = 1;
  public settings?: Settings;
  public showSearch: boolean = false;
  public viewType: string = 'grid';
  public searchText: string = '';

  constructor(
    public userService: UserService,
    private notification: NotificationsService,
    private router: Router
  ) { }

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

  openUserDialog(id: number): void {
    this.router.navigate([`/user/update/${id}`]);
  }

  public changeView(viewType: any) {
    this.viewType = viewType;
    this.showSearch = false;
  }


}
