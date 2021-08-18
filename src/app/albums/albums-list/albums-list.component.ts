import { UsersService } from './../../users/users.service';
import { ActivatedRoute } from '@angular/router';
import { AlbumsService } from './../albums.service';
import { Component, OnInit } from '@angular/core';
import { Album } from '../album';

@Component({
  selector: 'app-albums-list',
  templateUrl: './albums-list.component.html',
  styleUrls: ['./albums-list.component.scss'],
})
export class AlbumsListComponent implements OnInit {
  constructor(
    private albumsService: AlbumsService,
    private route: ActivatedRoute,
    private usersService: UsersService
  ) {}

  albums: Album[] = [];

  getAlbums() {
    const userId = this.route.snapshot.paramMap.get('userId');

    if (userId) {
      this.usersService
        .getUsersAlbums(userId)
        .subscribe((albums) => (this.albums = albums));
    } else {
      this.albumsService
        .getAlbums()
        .subscribe((albums) => (this.albums = albums));
    }
  }

  ngOnInit(): void {
    this.getAlbums();
  }
}
