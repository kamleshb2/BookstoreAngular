import { Component, OnInit, Input, EventEmitter,Output } from '@angular/core';
//import {allbooks} from '../BookRepository';
import {BooksService} from '../books.service';

@Component({
  selector: 'search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  @Input()
  searchbookid:number;

  result:any;

  @Output()
  errorevent:EventEmitter<string> = new EventEmitter<string>();

  constructor(private svc: BooksService)
  {
    //console.log("CONSTRUCTOR: book id from parent is: ", this.searchbookid);
  }

  ngOnInit()
  {
    //console.log("ngOnInit: book id from parent is: ", this.searchbookid);
  }
  ngOnChanges()
  {
    console.log("ngOnChanges: book id from parent is: ", this.searchbookid);

    // this.result = allbooks.find(b => b.bookid == this.searchbookid);
    // if(this.result == undefined || this.result == null)
    // {
    //   this.errorevent.emit("Book not found!");
    // }
    this.result = this.svc.GetBookById(this.searchbookid);
    if(this.result == undefined || this.result == null)
    {
      this.errorevent.emit("Book not found!");
    }
  }
}
