import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostsService } from './../posts.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss'],
})
export class PostsListComponent implements OnInit {
  constructor(
    private postsService: PostsService,
    private route: ActivatedRoute
  ) {}

  posts: Post[] = [];
  filteredPosts: Post[] = this.posts;

  userIds: number[] = [];

  selectedUser: number | 'all' =
    Number(this.route.snapshot.paramMap.get('userId')) || 'all';

  getPosts(): void {
    this.postsService.getPosts().subscribe((posts) => {
      this.posts = posts;
      this.filteredPosts =
        typeof this.selectedUser === 'number'
          ? this.posts.filter((post) => post.userId === this.selectedUser)
          : this.posts;

      this.userIds = this.posts.reduce((ids: number[], post) => {
        return ids.includes(post.userId) ? ids : [...ids, post.userId];
      }, []);
    });
  }

  handleSelectChange() {
    const filteredPostsByUserId =
      this.selectedUser === 'all'
        ? this.posts
        : this.posts.filter((post) => post.userId === this.selectedUser);

    this.filteredPosts = filteredPostsByUserId;
  }

  handleSearchChange(searchText: string) {
    const filteredPostsByTitle = searchText
      ? this.posts.filter(({ title }) => title.includes(searchText))
      : this.posts;

    this.filteredPosts = filteredPostsByTitle;
  }

  ngOnInit(): void {
    this.getPosts();
  }
}
