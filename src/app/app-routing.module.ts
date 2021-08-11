import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersInfoComponent } from './users/users-info/users-info.component';
import { UsersListComponent } from './users/users-list/users-list.component';

const routes: Routes = [
  { path: 'users', component: UsersListComponent },
  { path: 'users/:id', component: UsersInfoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
