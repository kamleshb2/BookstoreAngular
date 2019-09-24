import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BooksService
{
  private allbooks:any[] = [
    {bookid:1, bookname:'Pro ASP.NET Core', publisher:'APress', price:600.00, thumbnail:"assets/proaspnet.gif"},
    {bookid:2, bookname:'Angular7 Unleashed', publisher:'SAMS', price:1200.00, thumbnail:"assets/angular7.gif"},
    {bookid:3, bookname:'Pro LINQ', publisher:'APress', price:450.00, thumbnail:"assets/linq.gif"}
  ];

  constructor()
  {
    console.log("BooksService constr called");
  }

  GetAllBooks(): any[]
  {
    return this.allbooks;
  }

  GetBookById(bookid:number): any
  {
    let result;
    result = this.allbooks.find(b => b.bookid == bookid);
    return result;
  }

  AddBook(book:any): string
  {
    //check if the book id exists
    let result = this.allbooks.find(b => b.bookid == book.bookid);
    if(result != undefined)
    {
      return "Book id: " + book.bookid + " already exists";
    }

      
      
    let path = book.thumbnail.split("\\" ,3);

    book.thumbnail = "assets/" + path[2];
      

    
     

    this.allbooks.push(book);
    return "Book with id: " +book.bookid +" added successfully";
  }

  DeleteBook(bookid: number): string
  {
    var flag: Boolean = false;
    for(let i=0; i<this.allbooks.length; i++){
      if(this.allbooks[i].bookid == bookid){
        this.allbooks.splice(i,1);
        flag == true;
        break;
      }
      
    }

    if(flag){
      return "successfully deleted";
    }
    else{
      return "given id doesn't exist";
    }
  }

  ValidatePath(filename:string): String
  {
    

    let path = filename.split("\\" ,3);

    var thumbnail = "assets/" + path[2];
   

    return thumbnail;
  }

  ValidateThumbanilPathExtension(filename: string): boolean
  {
    //return true if the validation is successful
    //return false if the validation fails

    var isValid: boolean;
    let path = filename.split(".",2)
    if(path[1] == "jpg" || path[1] == "jpeg" || path[1] == "png" || path[1] == "gif"){
      isValid = true;
    }
    else{ 
      isValid = false;
    }

    return isValid;

  }

  EditBook(newbookdetails:any): string
  {
    for(let i=0 ; i< this.allbooks.length ; i++)
    {
      if(this.allbooks[i].bookid == newbookdetails.bookid)
      {
        this.allbooks[i].bookname = newbookdetails.bookname;
        this.allbooks[i].publisher = newbookdetails.publisher;
        this.allbooks[i].price = newbookdetails.price;
        this.allbooks[i].thumbnail = newbookdetails.thumbnail;
        break;

      }
    }
    return "Book with id: " +newbookdetails.bookid +" edited";
  }

  

}
