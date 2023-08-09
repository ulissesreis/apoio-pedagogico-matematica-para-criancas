import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss']
})
export class CalculadoraComponent implements OnInit {

  @Input() operator: "+" | "-" | "*" | "/" = "+";

  public firstNumber = 0;
  public secondNumber = 0;

  public answer = "";
  public correctAnswer = 0;
  public isCorrectAnswer = false;
  public showMessage = false;

  public ngOnInit(): void {
    this.generateOperation();
  }

  public generateOperation(): void {
    this.clearResults();

    const minNumber = 1;
    const maxNumber = 10;

    this.firstNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
    this.secondNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);

  }

  public clearResults(): void {
    this.showMessage = false;
    this.isCorrectAnswer = false;
    this.correctAnswer = 0;
    this.answer = "";
  }

  public checkAnswer(): void {

    let answer;

    switch (this.operator) {
      case "+":
        answer = Number(this.answer);
        this.correctAnswer = this.firstNumber + this.secondNumber;
        break;
      case "-":
        answer = Number(this.answer);
        this.correctAnswer = this.firstNumber - this.secondNumber;
        break;
      case "*":
        answer = Number(this.answer);
        this.correctAnswer = this.firstNumber * this.secondNumber;
        break;
      case "/":
        answer = parseFloat(this.answer.replace(',', '.'));
        this.correctAnswer = this.firstNumber / this.secondNumber;
        break;
    }

    this.isCorrectAnswer = (this.correctAnswer == answer);
    this.showMessage = true;
  }

}
