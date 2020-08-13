import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PoductsRoutingModule } from './poducts-routing.module';
import { ProductmainwraaperComponent } from './productmainwraaper/productmainwraaper.component';
import { GalvanizedComponent } from './galvanized/galvanized.component';
import { GalvalumeComponent } from './galvalume/galvalume.component';
import { HotrollComponent } from './hotroll/hotroll.component';
import { ColdRollComponent } from './cold-roll/cold-roll.component';
import { ElectrogalvanizedComponent } from './electrogalvanized/electrogalvanized.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { GalvalenalComponent } from './galvalenal/galvalenal.component';


@NgModule({
  declarations: [ProductmainwraaperComponent, GalvanizedComponent, GalvalumeComponent, HotrollComponent, ColdRollComponent, ElectrogalvanizedComponent, GalvalenalComponent],
  imports: [
    CommonModule,
    SharedModule,
    PoductsRoutingModule
  ]
})
export class PoductsModule { }
