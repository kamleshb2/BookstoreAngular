import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import {BooksService} from '../books.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {


  @Input()
  private childbookid: number;
  @Input()
  private childeditbook: boolean;
  private bookname: string;
  private price: number;
  private publisher: string;
  private thumbnail: string;
  private book: any;
  @Output()
  message:EventEmitter<string> = new EventEmitter<string>();

  constructor(private svc: BooksService) { }

  ngOnInit() {
  }

  EditBook(){
  
    this.book = this.svc.GetBookById(this.childbookid);
    this.book.bookname = this.bookname;
    this.book.price = this.price;
    this.book.publisher = this.publisher;
    this.book.thumbnail = this.thumbnail;
    this.book.thumbnail = this.svc.ValidatePath(this.book.thumbnail);

    if(this.svc.ValidateThumbanilPathExtension(this.book.thumbnail)){
      this.message.emit(this.svc.EditBook(this.book));
      console.log("In edit Book")
    }
    else{
      this.message.emit("Given file extension is not allowed");
    }
  }







}
