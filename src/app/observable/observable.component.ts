import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {

  private operand1: number;
  private operand2: number;

  //create an observable
  private ob: Observable<string> = new Observable(function(source)
{
  //push data into onservable
  setTimeout(function()
{
  source.next("Hello");
},2000);

setTimeout(function()
{
  source.next("Hello welcome");
},2000);
});


private adderobservable: Observable<number> = new Observable<number>(source=>{

  console.log("Adderobservable created");

  //simulate some delay

  setTimeout(() =>
{
  source.next(this.operand1 + this.operand2);
},5000);


});


  constructor() { }

  ngOnInit() {
  }

  private addNumbers(n1: number, n2: number): Observable<number>
  {

    return this.adderobservable;
  }

  PerformAddition(){
    let resultobservable = this.addNumbers(this.operand1, this.operand2);
    resultobservable.subscribe(function(data)
  {
    console.log("numbers are adding: " + data);
  });
  }

}
