import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentsListComponent } from './comments/comments-list/comments-list.component';
import { PostInfoComponent } from './posts/post-info/post-info.component';
import { PostsListComponent } from './posts/posts-list/posts-list.component';
import { UserInfoComponent } from './users/user-info/user-info.component';
import { UsersListComponent } from './users/users-list/users-list.component';

const routes: Routes = [
  { path: 'users', component: UsersListComponent },
  { path: 'users/:userId', component: UserInfoComponent },
  { path: 'users/:userId/posts', component: PostsListComponent },
  { path: 'users/:userId/posts/:postId', component: PostInfoComponent },
  { path: 'posts', component: PostsListComponent },
  { path: 'posts/:postId', component: PostInfoComponent },
  { path: 'posts/:postId/comments', component: CommentsListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
