import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchFlightComponent } from './search-flight/search-flight.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { ViewTicketComponent } from './view-ticket/view-ticket.component';
import { DownloadTicketComponent } from './download-ticket/download-ticket.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SearchFlightComponent,
    SearchResultsComponent,
    CustomerDetailsComponent,
    ViewTicketComponent,
    DownloadTicketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
