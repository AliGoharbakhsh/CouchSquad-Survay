import { Injectable } from '@angular/core';
import { Survey } from './survey.model';

@Injectable()
export class Cart {
  public lines: CartLine[] = [];
  public itemCount = 0;
  public cartPrice = 0;

  addLine(survey: Survey, quantity: number = 1): void {
    const line = this.lines.find(l => l.survey._id === survey._id);
    if (line !== undefined) {
      line.quantity += quantity;
    }
    else {
      this.lines.push(new CartLine(survey, quantity));
    }
    this.recalculate();
  }

  updateQuantity(survey: Survey, quantity: number): void {
    const line = this.lines.find(l => l.survey._id === survey._id);
    if (line !== undefined) {
      line.quantity = Number(quantity);
    }
    this.recalculate();
  }

  removeLine(id: number): void {
    const index = this.lines.findIndex(l => l.survey._id === id);
    this.lines.splice(index, 1);
    this.recalculate();
  }

  clear(): void {
    this.lines = [];
    this.itemCount = 0;
    this.cartPrice = 0;
  }

  private recalculate(): void {
    this.itemCount = 0;
    this.cartPrice = 0;
    this.lines.forEach(l => {
      this.itemCount += l.quantity;
      this.cartPrice += (l.quantity * l.survey.price);
    });
  }
}

export class CartLine {
  constructor(public survey: Survey,
    public quantity: number) {

  }
}