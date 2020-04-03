import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { QuoteComponent } from './quote/quote.component';
import { VoteComponent } from './vote/vote.component';
import { DateCountPipe } from './date-count.pipe';
import { HighlighgtDirective } from './highlighgt.directive';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    QuoteDetailsComponent,
    QuoteFormComponent,
    QuoteComponent,
    VoteComponent,
    DateCountPipe,
    HighlighgtDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
