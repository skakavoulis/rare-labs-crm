import { ErrorHandlingService } from './error-handling.service';
import { Injectable } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserFromList } from './user-from-list';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://65.108.85.238:9000/api/';

  constructor(private api: HttpClient, private errorHandling: ErrorHandlingService) { }

  async getUsers(): Promise<UserFromList[]> {
    const url = `${this.baseUrl}users`;
    return await firstValueFrom(this.api.get(url))
      .then((res: any) => {
        return (res || [])[0];
      })
      .catch(err => {
        this.errorHandling.log('HTTP Error', err);
        return [] as UserFromList[];
      });
  }
}
