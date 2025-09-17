import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PharmacieGardeComponent } from './pharmacie-garde/pharmacie-garde.component';
import { PharmaciGardeServiceService } from './service/data/pharmaci-garde-service.service';
import {  HttpClientModule } from '@angular/common/http';
import { PharmacieGardeListComponent } from './pharmacie-garde-list/pharmacie-garde-list.component';
import { PharmaciedetailComponent } from './pharmaciedetail/pharmaciedetail.component';
import { PharmacieUpdateComponent } from './pharmacie-update/pharmacie-update.component';

@NgModule({
  declarations: [
    AppComponent,
    PharmacieGardeComponent,
    PharmacieGardeListComponent,
    PharmaciedetailComponent,
    PharmacieUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ PharmaciGardeServiceService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
