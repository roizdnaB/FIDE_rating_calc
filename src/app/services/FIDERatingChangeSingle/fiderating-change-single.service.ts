import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FIDERatingChangeSingleService {

  constructor() { }

  calculateRating(userRating, opponentRating, score, developmentCoeff) {
    var expectedScore = 1 / (1 + Math.pow(10, ((opponentRating - userRating)/400)));
    var result = developmentCoeff * (score - expectedScore);

    return this.roundPrecised(result, 1);
  }

  private roundPrecised(number, precision) {
    var power = Math.pow(10, precision);
    return Math.round(number * power) / power;
  }

}
