import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.css']
})
export class CalculateComponent implements OnInit {

defaultResult = '0';
number: number = 0;
operator: string | null = null;
  
  pressKey(value: string) {
    if(this.defaultResult === '0'){
      this.defaultResult = value.toString();
    }else{
      this.defaultResult = `${this.defaultResult}${value}`;
    }
  }

  operation(operator: string | null){
    this.number = parseFloat(this.defaultResult);
    this.operator = operator;
    this.defaultResult = ' ';
  }


  getResult(){
    const a = this.number;
    const b = parseFloat(this.defaultResult);

    let result: number = 0;

    if(this.operator === '*'){
      result = a * b;
    }

    if(this.operator === '/'){
      result = a / b;
    }
    if(this.operator === '+'){
      result = a + b;
    }
    if(this.operator === '-'){
      result = a - b;
    }

    this.number = result;
    this.defaultResult = result.toString();
  }

  


  constructor() { }

  ngOnInit(): void {
  }

}
