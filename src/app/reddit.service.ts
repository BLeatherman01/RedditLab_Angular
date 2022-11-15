import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Reddit} from './reddit';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class RedditService {
  baseURL:string = "https://www.reddit.com/r/aww.json"
  constructor(private http: HttpClient) {}



getPost():Observable<Reddit>{

  return this.http.get<Reddit>(this.baseURL);
}

}
