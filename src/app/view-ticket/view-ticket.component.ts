import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-ticket',
  templateUrl: './view-ticket.component.html',
  styleUrls: ['./view-ticket.component.css']
})
export class ViewTicketComponent implements OnInit {
  ticket: any;

  ngOnInit(): void {
    const ticket = localStorage.getItem('ticket');
    this.ticket = ticket ? JSON.parse(ticket) : null;
  }
}
