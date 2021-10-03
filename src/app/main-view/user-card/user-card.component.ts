import { UserService } from './../../services/user.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserFull } from 'src/app/services/user-from-list';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit, OnDestroy {

  user?: UserFull;
  routeSub: Subscription = Subscription.EMPTY;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) { }

  async ngOnInit(): Promise<void> {
    this.routeSub = this.route.params.subscribe(async params => {
      const id = params['id'];
      this.user = await this.userService.getUser(id);
    });
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }
}
