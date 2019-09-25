import { Component, OnInit } from '@angular/core';
import {from, of} from 'rxjs';
import {map, filter} from 'rxjs/operators'

@Component({
  selector: 'rxjs-operators',
  templateUrl: './rxjs-operators.component.html',
  styleUrls: ['./rxjs-operators.component.css']
})
export class RxjsOperatorsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  private somenumbers: number[] = [1,2,3,4,5,6,7,8,9,10];

  //create an observable from this array

  private allnumbersobservable = from(this.somenumbers);
  private result: number[] = [];
  private evenObservable;
  private oddObservable;
  private multiplyby2observable;

  GetAllNumbers()
  {
    this.allnumbersobservable.subscribe(data=> {
      this.result.push(data);
    })
  }

  GetEven()
  {
    this.evenObservable = this.allnumbersobservable.pipe(filter(num => num%2 === 0));

    this.result = [];
    this.evenObservable.subscribe(data=> {
      this.result.push(data);

    });
  }

  multiplyby2(){
    this.result = [];
    this.multiplyby2observable = this.allnumbersobservable.pipe(map(num => num*2));
    this.multiplyby2observable.subscribe(data=>{
      this.result.push(data);
    });
  }

  GetOdd()
  {
    this.oddObservable = this.allnumbersobservable.pipe(filter(num => num%2 === 1));

    this.result = [];
    this.oddObservable.subscribe(data=> {
      this.result.push(data);

    });
  }

}
