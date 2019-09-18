import { Component, OnInit } from '@angular/core';
import {bookList}  from '../book/book-list.component';

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {


  constructor() { 

  }

  ngOnInit() {
  }


  books : any[] = bookList;
  name : string = 'Karthik';
  private showbooks:boolean = false;

  Show():void{
    this.showbooks=true;
  } 

  Hide():void{
    this.showbooks=false;
  } 
  changeName() : void {
    this.name = "Hello";
  }

}
