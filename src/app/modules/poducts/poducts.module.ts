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
import { ProductfiltersComponent } from './productfilters/productfilters.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { Ng5SliderModule } from 'ng5-slider';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [ProductmainwraaperComponent, GalvanizedComponent, GalvalumeComponent, HotrollComponent, ColdRollComponent, ElectrogalvanizedComponent, GalvalenalComponent, ProductfiltersComponent, DetailsComponent],
  imports: [
    CommonModule,
    SharedModule,
    PoductsRoutingModule,
    NgbModule,
    Ng5SliderModule
  ]
})
export class PoductsModule { }
