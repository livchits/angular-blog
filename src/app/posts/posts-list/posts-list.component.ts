import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostsService } from './../posts.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss'],
})
export class PostsListComponent implements OnInit {
  constructor(private postsService: PostsService) {}

  posts: Post[] = [];

  userIds: number[] = [1, 2, 3, 4];

  getPosts(): void {
    this.postsService.getPosts().subscribe((posts) => {
      this.posts = posts;
      this.userIds = this.posts.reduce((ids: number[], post) => {
        return ids.includes(post.userId) ? ids : [...ids, post.userId];
      }, []);
    });
  }

  ngOnInit(): void {
    this.getPosts();
  }
}
