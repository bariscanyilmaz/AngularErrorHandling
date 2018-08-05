import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Post } from '../models/post';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';
import { ErrorHandleService } from './error-handle.service';

@Injectable()
export class PostService {

  private readonly url='https://jsonplaceholder.typicode.com/posts';
  constructor(private http:HttpClient, private errorHandleService:ErrorHandleService) { }

  GetPosts(){
    return this.http.get<Post[]>(this.url)
    .catch(this.errorHandleService.HandleError);
  }

  CreatePost(post:Post){
    return this.http.post<Post>(this.url,post)
    .catch(this.errorHandleService.HandleError);
  }

  UpdatePost(id:number,post:Post){
    return this.http.put(this.url + '/' + id,post)
    .catch(this.errorHandleService.HandleError);
  }

  RemovePost(id:number){
    return this.http.delete(this.url + '/' + id)
    .catch(this.errorHandleService.HandleError);
  }

}