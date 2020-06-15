import { Component, OnInit, Input } from '@angular/core';
import { Quote } from '../quote'
@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

  votes: number;

  @Input () quote:Quote;
  vote = 0;

  constructor() {
    this.votes = 0;
   }

   likeVote(): boolean{
     this.votes +=1;
     return false;
   }

   dislikeVote(): boolean{
    this.votes -=1;
    return false;
  }

  ngOnInit(): void {
  }

}
