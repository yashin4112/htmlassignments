import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class ServiceGetQuotesService{

  public quotesApi: string = 'https://type.fit/api/quotes'

  constructor(public http: HttpClient) {}

  public getQuotes(): Observable<any> {
    return this.http.get(this.quotesApi);
  }
}
