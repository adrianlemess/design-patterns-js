import { PizzaStore } from "./pizza-store.interface";
import { FlavorsPizza } from "./flavors-pizza.enum";
import { Pizza } from "./pizza";
import { ChicagoPizza } from "./chicago-pizza";

export class ChicagoStore implements PizzaStore {
    createPizza(flavor: FlavorsPizza): Pizza {
        return new ChicagoPizza(flavor);
    }
}