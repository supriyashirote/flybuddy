import { Component, OnInit } from '@angular/core';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-download-ticket',
  templateUrl: './download-ticket.component.html',
  styleUrls: ['./download-ticket.component.css']
})
export class DownloadTicketComponent implements OnInit {
  ticket: any;
  flightName: any;
  oneway: any;
  flyingFrom: any;
  flyingTo: any;
  date: any;
  adults: any;
  children: any;
  travelClass: any;
  customerName: any;
  customerEmail: any;
  customerPhone: any;

  
  ngOnInit(): void {
    const ticket = localStorage.getItem('ticket');
    if (ticket) {
    this.ticket = ticket ? JSON.parse(ticket) : null;
    this.flightName = this.ticket.flight.name;
    this.oneway = this.ticket.flight.oneway;
    this.flyingFrom = this.ticket.flight.flyingFrom;
    this.flyingTo = this.ticket.flight.flyingTo;
    this.date = this.ticket.flight.date;
    this.adults = this.ticket.flight.adults;
    this.children = this.ticket.flight.children;
    this.travelClass = this.ticket.flight.class;

    // Access customer details
    this.customerName = this.ticket.customer.name;
    this.customerEmail = this.ticket.customer.email;
    this.customerPhone = this.ticket.customer.phone;
    }
  }

  downloadTicket() {
    //const ticketData = JSON.stringify(this.ticket, null, 2);
    

    const doc = new jsPDF();

    // Title
    doc.setFontSize(18);
    doc.text('Flight Ticket', 105, 10, { align: 'center' });

    // Airline and Flight Information
    doc.setFontSize(14);
    doc.text(`Flight Name: ${this.flightName}`, 20, 20);
    doc.text(`One Way: ${this.oneway}`, 20, 30);
    doc.text(`Flying From: ${this.flyingFrom}`, 20, 40);
    doc.text(`Flying To: ${this.flyingTo}`, 20, 50);
    doc.text(`Departing: ${this.date}`, 20, 60);
    doc.text(`Adults: ${this.adults}`, 20, 70);
    doc.text(`Children: ${this.children}`, 20, 80);
    doc.text(`Travel Class: ${this.travelClass}`, 20, 90);

    doc.text('Customer Information', 20, 110);
    doc.text(`Customer Name: ${this.customerName}`, 20, 120);
    doc.text(`Customer Email: ${this.customerEmail}`, 20, 130);
    doc.text(`Customer Phone: ${this.customerPhone}`, 20, 140);
    
    
    // Save the PDF
    doc.save('ticket.pdf');
  }
}
