import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FIDERatingInitService {

  constructor() { }

  calculateRating(opponentsRating, totalScore, numberOfGames) {
    var result = 0;
    if (totalScore > numberOfGames / 2) {
      var points = ((totalScore - (numberOfGames / 2)) / 0.5) * 20;
      result = opponentsRating + points;
    }
    else if (totalScore == numberOfGames / 2) {
      result = opponentsRating;
    }
    else {
      var dp = this.roundPrecised(totalScore / numberOfGames, 2);
      var rdMap = this.defineRDMap();
      result = opponentsRating + rdMap.get(dp);
    }



    return this.roundPrecised(result, 0);
  }

  private roundPrecised(number, precision) {
    var power = Math.pow(10, precision);
    return Math.round(number * power) / power;
  }

  private defineRDMap() {
    var rd = new Map([ 
      [0.49, -7],
      [0.48, -14],
      [0.47, -21],
      [0.46, -29],
      [0.45, -36],
      [0.44, -43],
      [0.43, -50],
      [0.42, -57],
      [0.41, -65],
      [0.40, -72],
      [0.39, -80],
      [0.38, -87],
      [0.37, -95],
      [0.36, -102],
      [0.35, -110],
      [0.34, -117],
      [0.33, -125],
      [0.32, -133],
      [0.31, -141],
      [0.30, -149],
      [0.29, -158],
      [0.28, -166],
      [0.27, -175],
      [0.26, -184],
      [0.25, -193],
      [0.24, -202],
      [0.23, -211],
      [0.22, -220],
      [0.21, -230],
      [0.20, -240],
      [0.19, -251],
      [0.18, -262],
      [0.17, -273],
      [0.16, -284],
      [0.15, -296],
      [0.14, -309],
      [0.13, -322],
      [0.12, -336],
      [0.11, -351],
      [0.10, -366],
      [0.09, -383],
      [0.08, -401],
      [0.07, -422],
      [0.06, -444],
      [0.05, -470],
      [0.04, -501],
      [0.03, -538],
      [0.02, -589],
      [0.01, -677],
      [0.00, -800]
    ]);
    return rd;
  }
}
