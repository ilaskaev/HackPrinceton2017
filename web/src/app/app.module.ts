import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NavigationModule } from 'app/navigation/navigation.module';
import { AppComponent } from './app.component';
import { MatModule } from 'app/mat/mat.module';
import { RadarComponent } from './radar/radar.component';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    AppComponent,
    RadarComponent
  ],
  imports: [
    BrowserModule,
    NavigationModule,
    MatModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
