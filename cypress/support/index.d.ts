export interface BookingDates {
  checkin: string;
  checkout: string;
}

export interface Booking {
  firstname: string;
  lastname: string;
  totalprice: number;
  depositpaid: boolean;
  bookingdates: BookingDates;
  additionalneeds: string;
}

declare global {
  namespace Cypress {
    interface Chainable {
      createToken(): Chainable<string>;
    }
  }
}

export {};
