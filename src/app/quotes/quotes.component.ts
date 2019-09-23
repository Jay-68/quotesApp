import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes = [
    // tslint:disable-next-line: max-line-length
    new Quotes(1, 'A villain must be a thing of power, handled with delicacy and grace. He must be wicked enough to excite our aversion, strong enough to arouse our fear, human enough to awaken some transient gleam of sympathy. We must triumph in his downfall, yet not barbarously nor with contempt, and the close of his career must be in harmony with all its previous development', 0, 0, 'Oyole', new Date(22 / 9 / 2019)),
    // tslint:disable-next-line: max-line-length
    new Quotes(2, 'The theistic philosopher has a tendency to devalue insufficient worldviews, ideologies, and quite often common sense for the greater good, and in such cases, one should not be discouraged when seen as a bad guy. If he stresses over mans perception of a righteous heart, then he has given his heart to man', 0, 0, 'Brayo', new Date(22 / 9 / 2019)),
    // tslint:disable-next-line: max-line-length
    new Quotes(3, 'Heroic ambition seemed to have been the cause of much of the worlds pain then - quite like it is now. No villain ever saw himself a villain: he only saw himself a hero; and this goes just as no hero ever saw himself a hero: he simply did what he had to do. No true hero initially sets out with intentions of being deemed a hero', 0, 0, 'Fatma', new Date(22 / 9 / 2019)),
    // tslint:disable-next-line: max-line-length
    new Quotes(4, 'We live in a society where some of the public idols are actually the villains that are willfully damaging the health of the next generation.', 0, 0, 'John', new Date(22 / 9 / 2019)),
  ];



  toggleDetails(index) {
    this.quotes[index].showUploader = !this.quotes[index].showUploader;
  }

  deleteQuote(isComplete, index) {
    if (isComplete) {
      // tslint:disable-next-line: prefer-const
      let toDelete = confirm(`Are you sure you want to delete quote ${this.quotes[index].id}`);
      if (toDelete) {
        this.quotes.splice(index, 1);
      }
    }
  }

  // tslint:disable-next-line: no-shadowed-variable
  addNewQuote(Quotes: Quotes) {
    // tslint:disable-next-line: prefer-const
    let quoteLength = this.quotes.length;
    Quotes.id = quoteLength + 1;
    Quotes.completeDate = new Date(Quotes.completeDate);
    this.quotes.push(Quotes);
  }

  constructor() { }

  ngOnInit() {
  }

}
