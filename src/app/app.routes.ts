import { Routes } from "@angular/router";
import { NewsComponent } from "./pages/news.component";

export const routes: Routes = [
  {
    path: 'news',
    component: NewsComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'news'
  },
  {
    path: '**',
    redirectTo: 'news'
  }
]
