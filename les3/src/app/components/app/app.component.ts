import { Component } from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from '../../models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'les3';
  users: User[];

  constructor(private userService: UserService) {
    this.userService.getUsers().subscribe(value => this.users = value);
  }
}
