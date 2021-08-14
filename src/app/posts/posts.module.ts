import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { AppRoutingModule } from './../app-routing.module';
import { PostsListComponent } from './posts-list/posts-list.component';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { PostInfoComponent } from './post-info/post-info.component';

@NgModule({
  declarations: [PostsListComponent, PostInfoComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatListModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
  ],
})
export class PostsModule {}
