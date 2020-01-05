import { PizzaStore } from "./pizza-store.interface";
import { FlavorsPizza } from "./flavors-pizza.enum";
import { NewYorkPizza } from "./new-york-pizza";

export class NewYorkStore implements PizzaStore {
    createPizza(flavor: FlavorsPizza) {
        return new NewYorkPizza(flavor);
    }
}