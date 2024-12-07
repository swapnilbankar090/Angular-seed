import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl="http://localhost:4500";

  // http header options

  httpOptions={
    headers:new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient:HttpClient) { }

  getAll():Observable<any>{
    return this.httpClient.get(this.apiUrl+'/posts/');
  }

  // create(post:Post):Observable<any>{
  //   return this.httpClient.post(this.apiUrl+'/posts/',JSON.stringify(post), this.httpOptions);
  // }
}
