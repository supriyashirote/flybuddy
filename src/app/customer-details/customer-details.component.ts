import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

interface FlightState {
  flight: any;
}

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
  flight: any;
  customer: any = {
    name: '',
    email: '',
    phone: ''
  };

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as FlightState;
    this.flight = state?.flight;
  }

  ngOnInit(): void {
    if (!this.flight) {
      this.router.navigate(['/search-flight']);
    }
  }

  confirmBooking() {
    const ticket = {
      flight: this.flight,
      customer: this.customer
    };

    // In real scenario, you would save the booking details to the server
    localStorage.setItem('ticket', JSON.stringify(ticket));
    this.router.navigate(['/view-ticket']);
  }
}
