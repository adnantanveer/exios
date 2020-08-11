import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './header/header.component';
import { FoterComponent } from './foter/foter.component';
import { PublicComponent } from './public/public.component';
import { SecureComponent } from './secure/secure.component';


@NgModule({
  declarations: [HeaderComponent, FoterComponent, PublicComponent, SecureComponent],
  imports: [
    CommonModule,
    SharedRoutingModule
  ]
})
export class SharedModule { }
