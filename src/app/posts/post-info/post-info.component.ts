import { ActivatedRoute } from '@angular/router';
import { PostsService } from './../posts.service';
import { Component, OnInit } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-post-info',
  templateUrl: './post-info.component.html',
  styleUrls: ['./post-info.component.scss'],
})
export class PostInfoComponent implements OnInit {
  constructor(
    private postsService: PostsService,
    private route: ActivatedRoute
  ) {}

  post?: Post;

  getPost(): void {
    const postId = Number(this.route.snapshot.paramMap.get('postId'));
    this.postsService.getPost(postId).subscribe((post) => (this.post = post));
  }

  ngOnInit(): void {
    this.getPost();
  }
}
