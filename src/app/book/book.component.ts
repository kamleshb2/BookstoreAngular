import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  constructor() { }




  ngOnInit() {
  }

  bookList: any[] = [

    {name: 'Angular', ID: 11222, publisher: 'APress' },
    {name: 'Angular Pro', ID: 111222, publisher: 'BPress' }

]

}
