import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatTabsModule, MatToolbarModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  imports:
      [CommonModule, MatToolbarModule, MatTabsModule, BrowserAnimationsModule],
  exports: [MatToolbarModule, MatTabsModule],
  declarations: []
})
export class MatModule {
}
