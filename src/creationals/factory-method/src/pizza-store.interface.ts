import { Pizza } from "./pizza";
import { FlavorsPizza } from "./flavors-pizza.enum";

export interface PizzaStore {
    createPizza: (flavor: FlavorsPizza) => Pizza;
}