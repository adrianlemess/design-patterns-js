import { OldTicketPriceCalculation } from "./src/old-price-ticket"
import { Credentials } from "./src/credentials";
import { PriceTicketAdapter } from "./src/price-ticket-adapter";
import { Currency } from "./src/new-price-ticket";

export const startAdapter = () => {

    const oldPricing = new OldTicketPriceCalculation();
    const credentials: Credentials = {
        token: 'c2er-123as',
        username: 'Joaquim'
    }

    const pricingAdapter = new PriceTicketAdapter(credentials, Currency.DOLAR);

    // Client calling oldPricing
    const oldResult = oldPricing.request(100, 120, 3);
    console.log('OldResult', oldResult);

    // Client calling oldPricing
    const newResult = pricingAdapter.request(100, 120, 3);
    console.log('NewResult', newResult);

}