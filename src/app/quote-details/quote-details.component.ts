import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  @Input() quote: Quote;
  @Output() isComplete = new EventEmitter<boolean>();



  uvotes = 0;
  dvotes = 0;

  upVote() {
    this.uvotes = this.uvotes + 1; // adds one on mouse click
  }

  downVote() {
    this.dvotes = this.dvotes + 1; // adds one per mouse click
  }


  quoteDelete(complete: boolean) {
    this.isComplete.emit(complete);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
