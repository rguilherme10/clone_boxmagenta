import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../../components/app/app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppheaderComponent } from '../../components/app/appheader/appheader.component';
import { AppcontentComponent } from '../../components/app/appcontent/appcontent.component';
import { AppfooterComponent } from '../../components/app/appfooter/appfooter.component';



@NgModule({
  declarations: [
    AppComponent,
    AppheaderComponent,
    AppcontentComponent,
    AppfooterComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
