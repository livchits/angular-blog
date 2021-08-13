import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostInfoComponent } from './posts/post-info/post-info.component';
import { PostsListComponent } from './posts/posts-list/posts-list.component';
import { UsersInfoComponent } from './users/users-info/users-info.component';
import { UsersListComponent } from './users/users-list/users-list.component';

const routes: Routes = [
  { path: 'users', component: UsersListComponent },
  { path: 'users/:id', component: UsersInfoComponent },
  { path: 'posts', component: PostsListComponent },
  { path: 'posts/:id', component: PostInfoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
