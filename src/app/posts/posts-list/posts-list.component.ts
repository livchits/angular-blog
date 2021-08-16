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
          ? this.filterPostsByUserId(this.posts)
          : this.posts;

      this.userIds = this.posts.reduce((ids: number[], { userId }) => {
        return ids.includes(userId) ? ids : [...ids, userId];
      }, []);
    });
  }

  filterPostsByUserId = (posts: Post[]): Post[] => {
    return this.selectedUser === 'all'
      ? posts
      : posts.filter(({ userId }) => userId === this.selectedUser);
  };

  changeFilteredPosts(searchText: string) {
    this.filteredPosts = searchText
      ? this.filterPostsByUserId(this.posts).filter(({ title }) =>
          title.includes(searchText)
        )
      : this.filterPostsByUserId(this.posts);
  }

  ngOnInit(): void {
    this.getPosts();
  }
}
