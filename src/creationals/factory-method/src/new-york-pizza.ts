import { Pizza } from "./pizza";
import { FlavorsPizza } from "./flavors-pizza.enum";

export class NewYorkPizza implements Pizza {
    public flavor: FlavorsPizza;
    public description: string;

    constructor(
        flavor: FlavorsPizza
    ) {
        this.flavor = flavor;
        this.description = `Pizza ${flavor} from NewYork`;
    }
}