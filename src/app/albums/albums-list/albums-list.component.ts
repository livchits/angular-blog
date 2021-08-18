import { AlbumsService } from './../albums.service';
import { Component, OnInit } from '@angular/core';
import { Album } from '../album';

@Component({
  selector: 'app-albums-list',
  templateUrl: './albums-list.component.html',
  styleUrls: ['./albums-list.component.scss'],
})
export class AlbumsListComponent implements OnInit {
  constructor(private albumsService: AlbumsService) {}

  albums: Album[] = [];

  getAlbums() {
    this.albumsService
      .getAlbums()
      .subscribe((albums) => (this.albums = albums));
  }

  ngOnInit(): void {
    this.getAlbums();
  }
}
