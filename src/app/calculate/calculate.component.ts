import { Component, Input, OnInit } from '@angular/core';
import { Number } from '../number';

@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.css']
})
export class CalculateComponent implements OnInit {

  value:string = '';
  result:string = '';
  operand1 = 0;
  operand2 = 0;
  operator = '';
  calculationString = '';
  operatorResult= false;
  
  operatorSet=false;
  
  pressKey(key:string) {
    this.operand1 = parseFloat(this.value);
    this.operand2 = parseFloat(this.value);
    this.operator = key;
      this.operatorSet = true;
      this.value += key;
      console.log('this.operand1 :>> ', this.operand1);
      console.log('this.operand2 :>> ', this.operand2);
  }
  // pressKey(key: string) {
  //   if (key === '/' || key === 'x' || key === '-' || key === '+') {
  //     const lastKey = this.result[this.result.length - 1];
  //     if (lastKey === '/' || lastKey === 'x' || lastKey === '-' || lastKey === '+') {
  //       this.operatorSet = true;
  //     }
  //     if ((this.operatorSet) || (this.result === '')) {
  //       return;
  //     }
  //     this.operand1 = parseFloat(this.result);
  //     this.operator = key;
  //     this.operatorSet = true;
  //   }
  //   if (this.result.length === 10) {
  //     return;
  //   }
  //   this.result += key;
  // }

  getResult(){
    this.calculationString = this.result;
    this.operand2 = parseFloat(this.result.split(this.operator)[1]);

    if(this.operator === "+"){
      this.value = this.result;
      this.result = (this.operand1 + this.operand2).toString();
      this.value = this.calculationString;
    }this.operatorResult=true;
  }
  


  constructor() { }

  ngOnInit(): void {
  }

}
