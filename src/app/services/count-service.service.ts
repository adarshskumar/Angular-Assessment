import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountServiceService {

  constructor() { }

  count:number=0;

  getCount(){
    return this.count;
  }

increaseCount(){
  this.count++;
}
decreaseCount(){
  this.count--;
}


}
