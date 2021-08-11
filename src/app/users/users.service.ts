import { User } from './user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  private usersUrl = 'https://jsonplaceholder.typicode.com/users';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl); //agregar manejo de errores
  }

  getUser(id: number): Observable<User | undefined> {
    const url = `${this.usersUrl}/${id}`;
    return this.http.get<User>(url); //agregar manejo de errores
  }
}
