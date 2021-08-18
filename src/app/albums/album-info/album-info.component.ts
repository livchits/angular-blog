import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Album } from '../album';
import { AlbumsService } from './../albums.service';

@Component({
  selector: 'app-album-info',
  templateUrl: './album-info.component.html',
  styleUrls: ['./album-info.component.scss'],
})
export class AlbumInfoComponent implements OnInit {
  constructor(
    private albumsService: AlbumsService,
    private route: ActivatedRoute
  ) {}

  album?: Album;

  getAlbum() {
    const albumId = this.route.snapshot.paramMap.get('albumId');
    if (albumId) {
      this.albumsService
        .getAlbum(albumId)
        .subscribe((album) => (this.album = album));
    }
  }

  ngOnInit(): void {
    this.getAlbum();
  }
}
