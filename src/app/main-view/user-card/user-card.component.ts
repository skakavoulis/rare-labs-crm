import { UserService } from './../../services/user.service';
import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  @Output()
  delete = new EventEmitter<number>();

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  async ngOnInit(): Promise<void> {
    this.routeSub = this.route.params.subscribe(async params => {
      const id = params['id'];
      this.user = await this.userService.getUser(id);
    });
  }

  openUserDialog(id: number): void {
    this.router.navigate([`/user/${id}`]);
  }

  deleteUser(id: number): void {
    this.delete.emit(id);
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }
}
