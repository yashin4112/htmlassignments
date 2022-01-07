import { Component, OnInit } from '@angular/core';
import { ServiceGetQuotesService } from './service-get-quotes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'quotes';
  public allQuotes: quotesType[] = [];
  count = 0;
  public isPreDisabled:boolean = true;

  constructor(private getQuotesService: ServiceGetQuotesService) {}

  ngOnInit(): void {
    this.getQuotesService.getQuotes().subscribe((result: any) => {
      this.allQuotes = result;
      console.log('result', result);
    });
  }

  nextQuote() {
    if (this.count < this.allQuotes.length - 1) {
      this.count++;
      this.isPreviousDisabled();
    } else this.count = 0;
  }

  previousQuote() {
    if (
      this.count !=
      this.allQuotes.indexOf({
        text: 'Genius is one percent inspiration and ninety-nine percent perspiration.',
        author: 'Thomas Edison'
      })
    ) {
      this.count--;
      this.isPreviousDisabled();
    } else {
      this.count = 0;
    }
  }

  isPreviousDisabled(){
    if(this.count > 0){
      this.isPreDisabled = false;
    }
    else{
      this.isPreDisabled = true;
    }
  }
}

export interface quotesType {
  author: string;
  text: string;
}
