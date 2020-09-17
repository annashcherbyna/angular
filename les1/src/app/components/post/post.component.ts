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

  constructor(private commentsService: CommentsService) { }

  showComment(postId: number): void{
    console.log(postId);

    this.commentsService.getCommentsByPostId(postId)
       .subscribe(value => console.log(value));
  }
  ngOnInit(): void {
  }
}
