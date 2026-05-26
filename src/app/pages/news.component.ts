import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';
import { Observable } from 'rxjs';

// Interfaces
import { INews } from '../interfaces/news-api.interface';

// Helpers
import { RequestState, withRequestState } from '../helper/utilities/with-loading-operator';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
})
export class NewsComponent implements OnInit {

  obs$!: Observable<RequestState<INews[]>>;

  constructor( private _news: NewsService ) { }

  ngOnInit(): void {
    this.getNews();
  }

  getNews() {
    this.obs$ = withRequestState(this._news.getNews());
  }
}
