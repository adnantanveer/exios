import { Component, OnInit } from '@angular/core';
import { Options } from 'ng5-slider';


@Component({
  selector: 'app-productfilters',
  templateUrl: './productfilters.component.html',
  styleUrls: ['./productfilters.component.scss']
})
export class ProductfiltersComponent implements OnInit {

  constructor() { }
  value: number = 40;
  highValue: number = 60;
  options: Options = {
    floor: 0,
    ceil: 100
  };
  ngOnInit(): void {
  }

}
