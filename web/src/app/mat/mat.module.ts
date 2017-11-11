import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatTabsModule, MatToolbarModule, MatListModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  imports:
      [CommonModule, MatToolbarModule, MatTabsModule, BrowserAnimationsModule, MatListModule],
  exports: [MatToolbarModule, MatTabsModule, MatListModule],
  declarations: []
})
export class MatModule {
}
