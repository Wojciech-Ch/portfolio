import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    RouterModule
  ],
  exports:[LayoutComponent]
})
export class LayoutModule { }
