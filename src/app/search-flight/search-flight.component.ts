import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-flight',
  templateUrl: './search-flight.component.html',
  styleUrls: ['./search-flight.component.css']
})
export class SearchFlightComponent {
  oneway: string= 'oneWay';
  flyingFrom: string = '';
  flyingTo: string = '';
  date: string = '';
  adults: number = 1;
  children: number = 1;
  class: string = 'Economy';

  constructor(private router: Router) { }

  searchFlights() {
    this.router.navigate(['/search-results'], {
      queryParams: {
        oneway: this.oneway,
        flyingFrom: this.flyingFrom,
        flyingTo: this.flyingTo,
        date: this.date,
        adults: this.adults,
        children: this.children,
        class: this.class
      }
    });
  }
}
