import { UserService } from './../../services/user.service';
import { Component, Input, OnInit } from '@angular/core';
import { UserFromList } from 'src/app/services/user-from-list';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users: UserFromList[] = [];

  constructor(private user: UserService) { }

  async ngOnInit(): Promise<void> {
    this.users = await this.user.getUsers()
  }

}
