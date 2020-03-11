import { OldTicketPriceCalculation } from "./src/old-price-ticket";
import { PriceTicketAdapter } from "./src/price-ticket-adapter";
import { Currency } from "./src/new-price-ticket";
import { Credentials } from "./src/credentials";

describe('Adapter', () => {
    it ('Should create a old Ticket', () => {
        const oldPricing = new OldTicketPriceCalculation();
        expect(oldPricing.request(100, 120, 3)).toEqual('R$ 66,00');
    })

    it ('Should create a new Ticket with Dolar currency', () => {
        const credentials: Credentials = {
            token: 'c2er-123as',
            username: 'Joaquim'
        }
    
        const pricingAdapter = new PriceTicketAdapter(credentials, Currency.DOLAR);
        expect(pricingAdapter.request(100, 120, 3)).toEqual('$ 74.50');

    })

    it ('Should create a new Ticket with Reais currency', () => {
        const credentials: Credentials = {
            token: 'c2er-123as',
            username: 'Joaquim'
        }
    
        const pricingAdapter = new PriceTicketAdapter(credentials, Currency.REAL);
        expect(pricingAdapter.request(100, 120, 3)).toEqual('R$ 74.50');

    })
});

