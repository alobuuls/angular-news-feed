export interface INewsApiResp {
  status: string;
  totalResults: number;
  articles: INews[];
}

export interface INews {
  source: INewsSource;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

interface INewsSource {
  id: string;
  name: string;
}
