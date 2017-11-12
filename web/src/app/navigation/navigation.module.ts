import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { MatModule } from 'app/mat/mat.module';

@NgModule({
  imports: [
    CommonModule,
    MatModule
  ],
  declarations: [NavComponent],
  exports: [NavComponent]
})
export class NavigationModule { }
