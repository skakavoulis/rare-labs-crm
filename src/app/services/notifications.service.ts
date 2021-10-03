import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor() { }

  success(message: string) {
    alert(message);
  }

  error(errorMessage: string) {
    alert(errorMessage);
  }
}
