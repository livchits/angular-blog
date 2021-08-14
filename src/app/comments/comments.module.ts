import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommentsListComponent } from './comments-list/comments-list.component';

@NgModule({
  declarations: [CommentsListComponent],
  imports: [CommonModule, MatCardModule],
})
export class CommentsModule {}
