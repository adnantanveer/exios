import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomewraperComponent } from './homewraper/homewraper.component';
import { BannerComponent } from './banner/banner.component';
import { SearchproductComponent } from './searchproduct/searchproduct.component';
import { WhychoseusComponent } from './whychoseus/whychoseus.component';
import { CommonlysearchedComponent } from './commonlysearched/commonlysearched.component';
import { ClienttestimonialComponent } from './clienttestimonial/clienttestimonial.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [HomewraperComponent, BannerComponent, SearchproductComponent, WhychoseusComponent, CommonlysearchedComponent, ClienttestimonialComponent],
  imports: [
    CommonModule,
    NgbModule ,
    MatSelectModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
