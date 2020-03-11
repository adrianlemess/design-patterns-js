export class OldTicketPriceCalculation {
    
    // Price calculation
    request(start, end, overweightLuggage) {
        const result = (end - start) * 3 + overweightLuggage * 2;
        return `R$ ${ result },00`;
    }
}