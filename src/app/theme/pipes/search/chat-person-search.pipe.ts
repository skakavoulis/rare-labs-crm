import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'ChatPersonSearchPipe' })
export class ChatPersonSearchPipe implements PipeTransform {
  transform(value: any, args?: any): Array<any> | null {
    let searchText = new RegExp(args, 'ig');
    if (value) {
      return value.filter((message: any) => {
        if (message.author) {
          return message.author.search(searchText) !== -1;
        }
        return null;
      });
    }
    return null;
  }
}
