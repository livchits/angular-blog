import { PostsListComponent } from './posts/posts-list/posts-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersInfoComponent } from './users/users-info/users-info.component';
import { UsersListComponent } from './users/users-list/users-list.component';

const routes: Routes = [
  { path: 'users', component: UsersListComponent },
  { path: 'users/:id', component: UsersInfoComponent },
  { path: 'posts', component: PostsListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
