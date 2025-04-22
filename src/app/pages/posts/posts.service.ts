import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Post } from './models/post.model';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  /**
   * Fetch a page of posts.
   * @param page 1-based page number
   * @param limit items per page
   * @param userId optional userId filter
   */
  getPosts(page: number, limit: number, userId?: number): Observable<{  posts: Post[];
    total: number;
  }
  > {
    const start = (page - 1) * limit;

    let params = new HttpParams()
      .set('_start', start.toString())
      .set('_limit', limit.toString());

    if (userId != null) {
      params = params.set('userId', userId.toString());
    }

    return this.http.get<Post[]>(this.apiUrl, { params, observe: 'response' }).pipe(
      map((resp: HttpResponse<Post[]>) => ({
        posts: resp.body || [],
        total: Number(resp.headers.get('X-Total-Count') || '0')
      }))
    );
  }

  getPost(id: number): Observable<Post> {
    return this.http.get<Post>(`${this.apiUrl}/${id}`);
  }

  addPost(post: Post): Observable<Post> {
    return this.http.post<Post>(this.apiUrl, post);
  }

  updatePost(id: number, post: Post): Observable<Post> {
    return this.http.put<Post>(`${this.apiUrl}/${id}`, post);
  }

  deletePost(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
