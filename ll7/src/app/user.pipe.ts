import { Pipe, PipeTransform } from '@angular/core';
import {User} from './user';

@Pipe({
  name: 'user'
})
export class UserPipe implements PipeTransform {

  // transform(value: User): string {
  //   return ( value.id + " " + value.name + " " +  value.email);
  // }

  transform(value: User[]): string {
    let usersSt = '';
    for (const arg of value) {
      usersSt += ( arg.id + "---"+ arg.name + "---"+  arg.email);
      usersSt += "\n";
      console.log(usersSt);
    }
    return usersSt;
  }

  // transform(value: User[]): string[] {
  //   let usersSt = [];
  //   for (const arg of value) {
  //     let usersSt_el;
  //     usersSt_el = ( arg.id + " " + arg.name + " " +  arg.email);
  //     usersSt.push(usersSt_el);
  //     console.log(usersSt);
  //   }
  //   return usersSt;
  // }
}
