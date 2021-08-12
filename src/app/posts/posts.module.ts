import { MatDividerModule } from '@angular/material/divider';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { AppRoutingModule } from './../app-routing.module';
import { PostsListComponent } from './posts-list/posts-list.component';

@NgModule({
  declarations: [PostsListComponent],
  imports: [CommonModule, AppRoutingModule, MatListModule, MatDividerModule],
})
export class PostsModule {}
