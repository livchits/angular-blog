import { AppRoutingModule } from './../app-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { UsersListComponent } from './users-list/users-list.component';
@NgModule({
  declarations: [UsersListComponent],
  imports: [CommonModule, MatDividerModule, MatListModule, AppRoutingModule],
})
export class UsersModule {}
