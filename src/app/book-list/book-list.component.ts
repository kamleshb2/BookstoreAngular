import { Component, OnInit } from '@angular/core';
//import {allbooks} from '../BookRepository';
import {BooksService} from '../books.service';


@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit
{
  private books:any[];
  private showbooks:boolean = false;

  constructor(private booksvc: BooksService)
  {
    this.books = this.booksvc.GetAllBooks();
  }

  Show():void
  {
    this.showbooks = true;
  }
  Hide():void
  {
    this.showbooks = false;
  }

  DeleteBook(bookid:number)
  {
    
  }



  ngOnInit() {
  }

}
