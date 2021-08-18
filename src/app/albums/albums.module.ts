import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { AppRoutingModule } from './../app-routing.module';
import { AlbumsListComponent } from './albums-list/albums-list.component';

@NgModule({
  declarations: [AlbumsListComponent],
  imports: [CommonModule, MatListModule, AppRoutingModule],
})
export class AlbumsModule {}
