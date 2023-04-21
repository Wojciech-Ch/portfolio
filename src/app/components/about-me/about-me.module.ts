import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeComponent } from './about-me/about-me.component';
import { AboutMeRoutingModule } from './about-me-routing.module';



@NgModule({
  declarations: [AboutMeComponent],
  imports: [
    CommonModule,
    AboutMeRoutingModule
  ],exports:[AboutMeComponent]
})
export class AboutMeModule { }
