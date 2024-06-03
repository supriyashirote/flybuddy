import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchFlightComponent } from './search-flight/search-flight.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { ViewTicketComponent } from './view-ticket/view-ticket.component';
import { DownloadTicketComponent } from './download-ticket/download-ticket.component';

const routes: Routes = [
  { path: '', component: SearchFlightComponent },
  { path: 'search-results', component: SearchResultsComponent },
  { path: 'customer-details', component: CustomerDetailsComponent },
  { path: 'view-ticket', component: ViewTicketComponent },
  { path: 'download-ticket', component: DownloadTicketComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

