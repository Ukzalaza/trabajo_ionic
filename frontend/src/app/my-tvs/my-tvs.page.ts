import { Component, OnInit } from '@angular/core';
import { TvService } from '../services/tv-service';

@Component({
  selector: 'app-my-tvs',
  templateUrl: './my-tvs.page.html',
  styleUrls: ['./my-tvs.page.scss'],
  standalone: false
})
export class MyTvsPage implements OnInit {


  tvs: any = [
    {
      id: 1,
      brand: "Samsung",
      model: "TQ55S90DAEXXC",
      inches: "65",
      scre: "3840 x 2160"
    },
    {
      id: 2,
      brand: "LG",
      model: "OLED83C34LA",
      inches: "55",
      scre: "3840 x 2160"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
