import { Subject } from 'rxjs/internal/Subject';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  successes$ = new Subject<string>();
  errors$ = new Subject<string>();

  constructor() { }

  success(message: string) {
    this.successes$.next(message);
  }

  error(errorMessage: string) {
    this.errors$.next(errorMessage);
  }
}
