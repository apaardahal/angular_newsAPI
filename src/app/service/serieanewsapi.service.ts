import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SerieanewsapiService {

  constructor(private _http: HttpClient) { }

  // Top Headlines API URL
  topHeadlinesNews = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=4c1a8bf2b124470c925933c11e6f152a';

  // Tech News API URL
  techNews = 'https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=4c1a8bf2b124470c925933c11e6f152a'

  // Business News API URl
  businessNews = 'https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=4c1a8bf2b124470c925933c11e6f152a'


  // Use Business Method
  serieaBusinessNews(): Observable<any>{
    return this._http.get(this.businessNews)
  }

  // Use Tech Method
  serieaTechNews(): Observable<any>{
    return this._http.get(this.techNews)
  }


  serieaHeadlines(): Observable<any>{
    return this._http.get(this.topHeadlinesNews)
  }

}
