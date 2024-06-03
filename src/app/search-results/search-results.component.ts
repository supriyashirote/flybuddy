import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  flights: any[] = [];
  matchingFlights: any[] = [];
  oneway: string = '';
  flyingFrom: string = '';
  flyingTo: string = '';
  date: string = '';
  adults: any = [];
  children: any = [];
  class: string = '';

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.oneway = params['oneway'];
      this.flyingFrom = params['flyingFrom'];
      this.flyingTo = params['flyingTo'];
      this.date = params['date'];
      this.adults = params['adults'];
      this.children = params['children'];
      this.class = params['class'];
      console.log(params);
      // Fetch and filter flights based on the search criteria
      this.matchingFlights = this.getMatchingFlights();
      console.log(this.matchingFlights);
    });
  }

  getMatchingFlights(): any[] {
    console.log(this.date);
    // Mock data for flights
    const flights = [
      { name: 'Flight A', oneway: 'oneWay', flyingFrom: 'FRA', flyingTo: 'IST', date: this.date, adults: this.adults, children: this.children, class: this.class },
      { name: 'Flight B', oneway: 'oneWay', flyingFrom: 'MAD', flyingTo: 'BCN', date: this.date, adults: this.adults, children: this.children, class: this.class },
      { name: 'Flight A', oneway: 'oneWay', flyingFrom: 'LHR', flyingTo: 'CDG', date: this.date, adults: this.adults, children: this.children, class: this.class },
      { name: 'Flight B', oneway: 'oneWay', flyingFrom: 'AMS', flyingTo: 'FCO', date: this.date, adults: this.adults, children: this.children, class: this.class }
    ];

    return flights.filter(flight =>
      flight.oneway === this.oneway &&
      flight.flyingFrom === this.flyingFrom &&
      flight.flyingTo === this.flyingTo &&
      flight.date === this.date &&
      flight.adults === this.adults &&
      flight.children === this.children &&
      flight.class === this.class
    );
  }

  bookFlight(flight: any) {
    this.router.navigate(['/customer-details'], { state: { flight: flight } });
  }
}
