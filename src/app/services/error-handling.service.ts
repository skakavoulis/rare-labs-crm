import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlingService {
  log(arg0: string, err: any): any {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}
