import { Component } from '@angular/core';
import {UserService} from './user.service';
import {User} from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'll7';
  users: User[];

  constructor(private userService: UserService) {
    this.userService.getAllUsers().subscribe(value => this.users = value);
  }
}
