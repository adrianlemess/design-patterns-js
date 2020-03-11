import { NewPriceTicketCalculation, Currency } from "./new-price-ticket";
import { Credentials } from "./credentials";

export class PriceTicketAdapter {
    private pricing: NewPriceTicketCalculation; 
    private currency: Currency;

    constructor(credentials: Credentials, currency: Currency) {
        this.pricing = new NewPriceTicketCalculation();
        this.pricing.login(credentials);
        this.currency = currency;
    }

    request(start, end, overweightLuggage) {
        this.pricing.setDestination(end);
        this.pricing.setStart(start);
        return this.pricing.calculate(overweightLuggage, this.currency);
    }
}