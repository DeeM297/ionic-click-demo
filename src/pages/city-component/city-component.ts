import { Input, Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';

@Component({
  selector: 'city-component',
  templateUrl: 'city-component.html'
})
export class CityComponent {

  @Input() cities: any = []; 

  constructor(public navCtrl: NavController) {

  }

  goToCityPage() {
    this.navCtrl.push(AboutPage)
  }

  ToggleFavorite(city) {
    city.favorited = !city.favorited;
    if(city.favorited) {
      city.favoriteCount++;
    } else {
      city.favoriteCount--;
    }
  }

  goToProfilePage() {
    this.navCtrl.push(ContactPage)
  }

}
