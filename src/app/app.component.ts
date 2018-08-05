import { Component, OnInit } from '@angular/core';
import { PostService } from './services/post.service';
import { Post } from './models/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  posts:Post[];

  constructor(private postService:PostService){
    
  }

  ngOnInit() {
    this.postService.GetPosts().subscribe((resp)=>{
      this.posts=resp;
    })
  }

  Create(title:HTMLInputElement,body:HTMLInputElement){
    const post:Post={
      title:title.value,
      body:body.value
    }

    this.postService.CreatePost(post).subscribe(resp=>{
      this.posts.unshift(resp);
      title.value='';
      body.value='';
    });
  }

  Remove(post:Post){
    this.postService.RemovePost(post.id).subscribe(resp=>{
      const index=this.posts.indexOf(post);
      this.posts.splice(index,1);
    });
  }

}
