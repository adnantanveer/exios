import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-whychoseus',
  templateUrl: './whychoseus.component.html',
  styleUrls: ['./whychoseus.component.scss']
})
export class WhychoseusComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  choosing = [
    {
      imgsrc: "../../../../assets/images/customer.png",
      heading: "Customer Satisfaction",
      des: 'with The Steel Store'
    },
    {
      imgsrc: "../../../../assets/images/quality.png",
      heading: "Quality",
      des: 'Quality is what the buyer says it is'
    },
    {
      imgsrc: "../../../../assets/images/efficiency.png",
      heading: "Efficiency",
      des: 'Efficiency is intelligent laziness'
    },
    {
      imgsrc: "../../../../assets/images/services.png",
      heading: "Service",
      des: 'Under promise. Over deliver.'
    }
  ]

}
