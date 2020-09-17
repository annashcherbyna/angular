import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../../models/User';
import {UserService} from '../../services/user.service';
import { Post } from '../../models/Post';
import {PostsService} from '../../services/posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //users: User[];
  posts: Post[];

  constructor(private postService: PostsService) {
    this.postService.getAllPosts().subscribe(value => this.posts = value);
  }
}


