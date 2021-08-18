import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Album } from '../albums/album';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  private usersUrl = 'https://jsonplaceholder.typicode.com/users';

  private usersAlbumUrl = (userId: string) =>
    `https://jsonplaceholder.typicode.com/users/${userId}/albums`;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl); //agregar manejo de errores
  }

  getUser(id: string): Observable<User | undefined> {
    const url = `${this.usersUrl}/${id}`;
    return this.http.get<User>(url); //agregar manejo de errores
  }

  getUsersAlbums(userId: string): Observable<Album[]> {
    const usersAlbumUrl = this.usersAlbumUrl(userId);
    return this.http.get<Album[]>(usersAlbumUrl);
  }
}
