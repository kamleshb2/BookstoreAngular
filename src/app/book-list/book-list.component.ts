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
  private editbookid: number;
  private showeditbook: boolean;
  private editBookMessage: string;

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
   let message = this.booksvc.DeleteBook(bookid);
   console.log(message);
  }

  editBook(bookid: number){

    this.editbookid = bookid;
    this.showeditbook = true;

  }



  ngOnInit() {
  }

  GetMessage(message: string){
    this.editBookMessage = message;
    console.log(message);
    alert(message);
  }

}
