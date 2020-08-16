import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OtherRoutingModule } from './other-routing.module';
import { BlogsComponent } from './blogs/blogs.component';
import { LiteratureComponent } from './literature/literature.component';


@NgModule({
  declarations: [BlogsComponent, LiteratureComponent],
  imports: [
    CommonModule,
    OtherRoutingModule
  ]
})
export class OtherModule { }
