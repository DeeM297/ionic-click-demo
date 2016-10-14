import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  city1: any = {
    name: "Paris",
    favorited: false,
    image: "http://bit.ly/2aXzczV",
    authorPic: "http://bit.ly/2dMCa9y",
    favoriteCount: 10,
    comments: [1,2,3],
  }

  city2: any = {
    name: "London",
    favorited: false,
    authorPic: "http://bit.ly/2dMCa9y",
    image: "http://bit.ly/26lzMu0",
    favoriteCount: 10,
    comments: [1,2,3],
  }

  city3: any = {
    name: "Gramalote",
    favorited: false,
    authorPic: "http://bit.ly/2dMCa9y",
    image: "http://bit.ly/2dW9ZEl",
    favoriteCount: 10,
    comments: [1,2,3],
  }

  city4: any = {
    name: "Vladivostok",
    favorited: false,
    authorPic: "http://bit.ly/2dMCa9y",
    image: "http://bit.ly/2e0NFe4",
    favoriteCount: 10,
    comments: [1,2,3],
  }

  //cities: any = {city1, city2, city3, city4};
  cities: any = [];

  constructor(public navCtrl: NavController) {
    //this.cities = Object.assign({},this.city1, this.city2, this.city3, this.city4)
    this.cities = [this.city1, this.city2, this.city3, this.city4];
  }

}
