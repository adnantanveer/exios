import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './header/header.component';
import { FoterComponent } from './foter/foter.component';
import { PublicComponent } from './public/public.component';
import { SecureComponent } from './secure/secure.component';
import { AboutComponent } from './about/about.component';
import { FaqComponent } from './faq/faq.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { PrivacyComponent } from './privacy/privacy.component';



@NgModule({
  declarations: [HeaderComponent, FoterComponent, PublicComponent, SecureComponent, AboutComponent, FaqComponent, PrivacyComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MatExpansionModule
  ]
})
export class SharedModule { }