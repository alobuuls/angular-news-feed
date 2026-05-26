import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { INews, INewsApiResp } from '../interfaces/news-api.interface';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private baseUrl = environment.baseUrl;
  private apiKey = environment.apiKey;

  constructor( private http: HttpClient) {}

  getNews(): Observable<INews[]> {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', this.apiKey);

    return this.http.get<INewsApiResp>(this.baseUrl, {headers}).pipe(map(res => res.articles));
  }
}
