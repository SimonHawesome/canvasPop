import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PopsicleComponent } from './popsicle/popsicle.component';
import { OrderFormComponent } from './order-form/order-form.component';

import { FlavoursService } from './services/flavours.service';
import { OrdersService } from './services/orders.service';

@NgModule({
  declarations: [
    AppComponent,
    PopsicleComponent,
    OrderFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    FlavoursService,
    OrdersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
