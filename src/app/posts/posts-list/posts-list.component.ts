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
  filteredPosts: Post[] = this.posts;

  userIds: number[] = [];

  getPosts(): void {
    this.postsService.getPosts().subscribe((posts) => {
      this.posts = posts;
      this.filteredPosts = posts;
      this.userIds = this.posts.reduce((ids: number[], post) => {
        return ids.includes(post.userId) ? ids : [...ids, post.userId];
      }, []);
    });
  }

  handleSelectChange({ value }: { value: number | 'all' }) {
    const filteredPostsByUserId =
      value === 'all'
        ? this.posts
        : this.posts.filter((post) => post.userId === value);

    this.filteredPosts = filteredPostsByUserId;
  }

  ngOnInit(): void {
    this.getPosts();
  }
}
