import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPost } from '../interfaces/postInterface';
import { API } from '../Constants/api';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) { }

  getAllPosts(): Observable<IPost[]> {
    return this.httpClient.get<IPost[]>(`${API.BASE_URL}${API.GET_POSTS}?_start=0&_limit=10`)
  }


  getPostDetails(id: string): Observable<IPost> {
    return this.httpClient.get<IPost>(`${API.BASE_URL}${API.GET_POSTS}/${id}`)
  }
}
