import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { AppRoutingModule } from './../app-routing.module';
import { AlbumInfoComponent } from './album-info/album-info.component';
import { AlbumsListComponent } from './albums-list/albums-list.component';

@NgModule({
  declarations: [AlbumsListComponent, AlbumInfoComponent],
  imports: [
    CommonModule,
    MatListModule,
    AppRoutingModule,
    MatCardModule,
    MatButtonModule,
  ],
})
export class AlbumsModule {}
