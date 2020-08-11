import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clienttestimonial',
  templateUrl: './clienttestimonial.component.html',
  styleUrls: ['./clienttestimonial.component.scss']
})
export class ClienttestimonialComponent implements OnInit {
  showdiv1= false;
  showdiv2 =false;
  showdiv3 =false;

  showdiv4 =false;

  constructor() { }

  ngOnInit(): void {
    this.showcontent1()
  }
  showcontent1(){
    this.showdiv1= true;
    this.showdiv2= false;
    this.showdiv3= false;
    this.showdiv4= false;

  }
  showcontent2(){
    this.showdiv1= false;
    this.showdiv2= true;
    this.showdiv3= false;
    this.showdiv4= false;

  }
  showcontent3(){
    this.showdiv1= false;
    this.showdiv2= false;
    this.showdiv3= true;
    this.showdiv4= false;

  }
  showcontent4(){
    this.showdiv1= false;
    this.showdiv2= false;
    this.showdiv3= false;
    this.showdiv4= true;

  }
  

}
