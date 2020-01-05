import { PizzaStore } from "./src/pizza-store.interface"
import { ChicagoStore } from "./src/chicago-store"
import { FlavorsPizza } from "./src/flavors-pizza.enum";

export const startFactory = () => {
    const pizzaStore: PizzaStore = new ChicagoStore();

    // Pizzas from Chicago
    const pizzaBaconFromChicago = pizzaStore.createPizza(FlavorsPizza.BACON);
    const pizzaFourCheeseFromChicago = pizzaStore.createPizza(FlavorsPizza.FOUR_CHEESE);
    const pizzaMargheritFromChicago = pizzaStore.createPizza(FlavorsPizza.MARGHERIT);

    console.log('pizzaBaconFromChicago', pizzaBaconFromChicago);
    console.log('pizzaFourCheeseFromChicago', pizzaFourCheeseFromChicago);
    console.log('pizzaMargheritFromChicago', pizzaMargheritFromChicago);

}    
