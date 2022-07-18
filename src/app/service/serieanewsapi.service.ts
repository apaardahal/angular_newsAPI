import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SerieanewsapiService {

  constructor(private _http: HttpClient) { }

  // Top Headlines API URL
  topHeadlinesNews = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=4c1a8bf2b124470c925933c11e6f152a';

  serieaHeadlines(): Observable<any>{
    return this._http.get(this.topHeadlinesNews)
  }

}
