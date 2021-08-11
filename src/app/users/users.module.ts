import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { AppRoutingModule } from './../app-routing.module';
import { UsersInfoComponent } from './users-info/users-info.component';
import { UsersListComponent } from './users-list/users-list.component';
@NgModule({
  declarations: [UsersListComponent, UsersInfoComponent],
  imports: [
    CommonModule,
    MatDividerModule,
    MatListModule,
    AppRoutingModule,
    MatCardModule,
    MatButtonModule,
  ],
})
export class UsersModule {}
