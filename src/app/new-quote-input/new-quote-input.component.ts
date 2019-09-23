import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Quotes } from '../quotes';
@Component({
  selector: 'app-new-quote-input',
  templateUrl: './new-quote-input.component.html',
  styleUrls: ['./new-quote-input.component.css']
})
export class NewQuoteInputComponent implements OnInit {

  newQuote = new Quotes(0, '', 0, 0, '', new Date());

  @Output() addQuote = new EventEmitter<Quotes>();

  submitQuote() {
    this.addQuote.emit(this.newQuote);
  }

  constructor() { }

  ngOnInit() {
  }

}
