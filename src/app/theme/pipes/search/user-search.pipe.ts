import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'UserSearchPipe', pure: false })
export class UserSearchPipe implements PipeTransform {
  transform(value: any, args?: any): Array<any> | null {
    let searchText = new RegExp(args, 'ig');
    if (value) {
      return value.filter((user: any) => {
        return user.username.search(searchText) !== -1;
      });
    }
    return [];
  }
}