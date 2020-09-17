import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../models/Post';
import {CommentsService} from '../../services/comments.service';

@Component({
  selector: 'app-post-component',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input()
  post: Post;
  constructor() { }

  showComment(postId: number): void{
    // CommentsService.getCommentsByPostId(postId)
    //   .subscribe(value => console.log(value));
    console.log(postId);
  }
  ngOnInit(): void {
  }
}
