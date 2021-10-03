import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  error(arg0: string) {
    throw new Error('Method not implemented.');
  }
  success(arg0: string) {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}
