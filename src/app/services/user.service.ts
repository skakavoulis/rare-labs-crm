import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Subject } from 'rxjs/internal/Subject';
import { environment } from 'src/environments/environment';

import { UserFromList, UserFull } from './user-from-list';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = environment.apiUrl;

  public users$ = new Subject<UserFromList[]>();

  constructor(private api: HttpClient) { }

  async loadUsers(): Promise<void> {
    const url = `${this.baseUrl}users`;
    const users = await firstValueFrom(this.api.get(url))
      .then((res: any) => {
        const users = (res || [])[0];
        this.users$.next(users);
      })
      .catch(this.errorResponse);
  }

  async getUser(id: any): Promise<UserFull> {
    const url = `${this.baseUrl}users/${id}`;
    return await firstValueFrom(this.api.get(url))
      .then((res: any) => {
        return res;
      })
      .catch(this.errorResponse);
  }

  async deleteUser(id: number): Promise<ActionResult> {
    const url = `${this.baseUrl}users/${id}`;
    return await firstValueFrom(this.api.delete(url))
      .then(this.successResponse)
      .catch(this.errorResponse);
  }

  async updateUser(userId: number, phoneNumber: number): Promise<ActionResult> {
    const url = `${this.baseUrl}users`;
    return await firstValueFrom(this.api.put(url, { userId, phoneNumber }))
      .then(this.successResponse)
      .catch(this.errorResponse);
  }

  private errorResponse(err: any) {
    return {
      error: err,
      success: false
    } as ActionResult;
  }

  private successResponse(res: any) {
    return {
      success: true
    } as ActionResult;
  }
}

export interface ActionResult {
  error: any;
  success: boolean;
}