import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatToolbar, MatToolbarModule} from '@angular/material';

@NgModule({
  imports: [CommonModule, MatToolbarModule],
  exports: [MatToolbarModule],
  declarations: []
})
export class MatModule {
}
