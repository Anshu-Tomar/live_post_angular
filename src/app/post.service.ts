import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from './post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private baseUrl ='http://localhost:8000/api';

  constructor(private http:HttpClient) { }
  // create Post
  CreatePost(data:any){
    return this.http.post<Post>('http://localhost:8000/api/livepostList',data)
  }

  // get Post
  getLivePost(){
    return this.http.get<Post>('http://localhost:8000/api/livepostList')
  }

  // get single Post
  getSingleLivePost(id:any){
    return this.http.get<Post>(`http://localhost:8000/api/livepostDetail/${id}`)
  }
  
  // edit Post
  updateLivePost(id:any,datafield:any){
    return this.http.put<Post>(`http://localhost:8000/api/livepostDetail/${id}`,datafield)
  }

  // delete Post
  deleteLivePost(id:any){
    return this.http.delete(`http://localhost:8000/api/livepostDetail/${id}`)
  }

    // patch function
  likePost(id:any,data:any){
    debugger
    return this.http.patch<Post>(`http://localhost:8000/api/livepostDetail/${id}`,data); 
  }

}

