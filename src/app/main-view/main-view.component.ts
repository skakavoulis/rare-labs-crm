import { UserListComponent } from './user-list/user-list.component';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { UserFromList } from '../services/user-from-list';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent {

  constructor() { }

}
