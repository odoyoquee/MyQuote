import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
// import {TimeAgoPipe} from 'time-ago-pipe';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  // @ts-ignore
  quotes = [
    new Quote(1, 'Nelson Mandela', 'There is no passion to be found playing small - in settling for a life that is less than the one you are capable of living.', 'admin', new Date(2020, 3, 10)),
    // tslint:disable-next-line:max-line-length
    new Quote(2, 'Mohandas Gandhi', 'Strength does not come from physical capacity. It comes from an indomitable will.', 'admin', new Date(2020, 3, 23)),
    new Quote(3, 'Rick Flores', 'We have to come for them before they come for us, it is that simple', 'admin', new Date(2020, 3, 17)),

  ];

  showDescription = false; // boolean setting to hide and display

  addNewQuote(quote) {
    const quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.completeDate = new Date(quote.completeDate);
    this.quotes.push(quote);
  }

  deleteQuote(isComplete, index) {
    if (isComplete) {
      const toDelete = confirm(`Do you want to delete this Quote? ${this.quotes[index].name}`); // alert

      if (toDelete) { this.quotes.splice(index, 1); }// removes quote
    }
  }

  toggleQuote(index) {
    // show or hide content
  }



  constructor() { }

  ngOnInit(): void {
  }

  toggleDetail(index) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
}
