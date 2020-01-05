import { FlavorsPizza } from "./flavors-pizza.enum";

export interface Pizza {
    flavor: FlavorsPizza;
    description: string;
}