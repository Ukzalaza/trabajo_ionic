import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  brand: string = "BH";
  model: string = "star";
  inches: string = "lola"
  scre: string = "klk"

  constructor() {}

}
