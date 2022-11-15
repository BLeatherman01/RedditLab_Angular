import { Component } from '@angular/core';
import { Reddit, Post } from './reddit';
import { RedditService } from './reddit.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RedditTS';
  resultsR: Reddit [] = [];
  posts: Post [] = [];

  constructor(private redditApi: RedditService){}

  searchReddit(): void{

    this.redditApi.getPost().subscribe((result: Reddit)=>
    {this.resultsR.push(result);
    this.updatePost();
    });
    
  }

  updatePost():void{
  
   for(let i =1; i < 10; i++){
    this.posts.push(
      {title: this.resultsR[0].data.children[i].data.title, url: this.resultsR[0].data.children[i].data.url, thumbnail: this.resultsR[0].data.children[i].data.thumbnail });

   }
    
  }

}
