import { CommentsService } from './../comments.service';
import { ActivatedRoute } from '@angular/router';
import { Comment } from './../comment';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.scss'],
})
export class CommentsListComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private commentsService: CommentsService
  ) {}

  comments: Comment[] = [];

  getComments(): void {
    const postId = Number(this.route.snapshot.paramMap.get('postId'));
    this.commentsService
      .getCommentsByPostId(postId)
      .subscribe((comments) => (this.comments = comments));
  }

  ngOnInit(): void {
    this.getComments();
  }
}
