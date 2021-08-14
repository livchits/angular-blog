import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentsListComponent } from './comments/comments-list/comments-list.component';
import { PostInfoComponent } from './posts/post-info/post-info.component';
import { PostsListComponent } from './posts/posts-list/posts-list.component';
import { UserInfoComponent } from './users/user-info/user-info.component';
import { UsersListComponent } from './users/users-list/users-list.component';

const routes: Routes = [
  { path: 'users', component: UsersListComponent },
  { path: 'users/:id', component: UserInfoComponent },
  { path: 'posts', component: PostsListComponent },
  { path: 'posts/:id', component: PostInfoComponent },
  { path: 'posts/:id/comments', component: CommentsListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
