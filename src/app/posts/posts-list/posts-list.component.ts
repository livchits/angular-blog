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

  getPosts(): void {
    this.postsService.getPosts().subscribe((posts) => (this.posts = posts));
  }

  ngOnInit(): void {
    this.getPosts();
  }
}
