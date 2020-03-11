import { Credentials } from "./credentials";

export enum Currency {
    DOLAR = '$',
    REAL = 'R$'
}

export class NewPriceTicketCalculation {
  private credentials: Credentials;
  private start: number;
  private destination: number;

  login(credentials: Credentials) {
    // Login fake
    this.credentials = credentials;
  }

  setStart(start) {
    this.start = start;
  }

  setDestination(destination) {
      this.destination = destination;
  }

  calculate(overweightLuggage, currency: Currency) {
    const result = (this.destination - this.start) * 3.5 + overweightLuggage * 1.5; 
    return `${currency}${result.toFixed(2)}`;
  }
}
