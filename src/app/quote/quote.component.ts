import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quote = [
    new Quote(1, 'The earth is spherical.','X.Y Zed',"Z.G"),
    new Quote(2, 'The planets are flat.', 'D.P Hound',"E.T"),
    new Quote(3, 'The orbits are eliptical.', 'H.G Wells',"T.O"),
    new Quote(4, 'The galaxies are infinite.', 'I.A Mamen',"Y.S"),
    new Quote(5, 'Space is still expanding.', 'C.G Sagan',"Q.T"),
];
addNewQuote(quote){
  let quoteLength = this.quote.length;
  quote.id=quoteLength+1;
  this.quote.unshift(quote)

}

toogleDetails(index){
  this.quote[index].showAuthor = !this.quote[index].showAuthor;
}

  constructor() { }

  ngOnInit(): void {
  }

}
