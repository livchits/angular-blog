import { Comment } from './comment';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  constructor(private http: HttpClient) {}

  private commentsUrl = (postId: string) =>
    `https://jsonplaceholder.typicode.com/posts/${postId}/comments`;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  getCommentsByPostId(postId: string): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.commentsUrl(postId));
  }
}
