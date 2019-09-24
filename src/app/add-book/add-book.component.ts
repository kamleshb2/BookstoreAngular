import { Component, OnInit } from '@angular/core';
import {BooksService} from '../books.service';

@Component({
  selector: 'add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  private bookid:number;
  private bookname:string;
  private publisher:string;
  private price:number;
  private thumbnail:string;

  constructor(private svc: BooksService) { }

  AddBook()
  {
    let bookobject = {
      bookid: this.bookid,
      bookname: this.bookname,
      publisher: this.publisher,
      price: this.price,
      thumbnail: this.thumbnail
    };

    //validate the thumbnail extension
    let result = this.svc.AddBook(bookobject);
    alert(result);
  }

  ngOnInit() {
  }

}
