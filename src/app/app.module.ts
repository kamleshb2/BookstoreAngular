import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookComponent } from './book/book.component';
import {FormsModule} from '@angular/forms';
import { SearchBookComponent } from './search-book/search-book.component';
import { SearchResultComponent } from './search-result/search-result.component'; // this is for compiler

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookComponent,
    SearchBookComponent,
    SearchResultComponent
  ],
  imports: [
    BrowserModule, FormsModule   //this is for runtime environment
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
