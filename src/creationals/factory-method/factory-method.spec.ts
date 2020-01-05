import { Pizza } from "./src/pizza"
import { PizzaStore } from "./src/pizza-store.interface"
import { ChicagoStore } from "./src/chicago-store"
import { FlavorsPizza } from "./src/flavors-pizza.enum"
import { ChicagoPizza } from "./src/chicago-pizza"
import { NewYorkStore } from "./src/new-york-store"
import { NewYorkPizza } from "./src/new-york-pizza"

const checkPizza = (
    pizza: Pizza, 
    expectedPizza: Pizza, 
    PizzaClass
) => {
    expect(pizza.description).toEqual(expectedPizza.description);
    expect(pizza.flavor).toEqual(expectedPizza.flavor);
    expect(pizza instanceof PizzaClass)
}

describe('Factory Method', () => {
    describe('Chicago Store', () => {
        let pizzaStore: PizzaStore;
        beforeAll(() => {
            pizzaStore = new ChicagoStore();
        })
        
        it('Should create a four cheese pizza from Chicago', () => {
            const fourCheeseChicago = pizzaStore.createPizza(FlavorsPizza.FOUR_CHEESE);
            checkPizza(
                fourCheeseChicago, 
                new ChicagoPizza(FlavorsPizza.FOUR_CHEESE),
                ChicagoPizza);
        });

        it('Should create a bacon pizza from Chicago', () => {
            const fourCheeseChicago = pizzaStore.createPizza(FlavorsPizza.BACON);
            checkPizza(
                fourCheeseChicago, 
                new ChicagoPizza(FlavorsPizza.BACON),
                ChicagoPizza);
        });

        it('Should create a Margherit pizza from Chicago', () => {
            const fourCheeseChicago = pizzaStore.createPizza(FlavorsPizza.MARGHERIT);
            checkPizza(
                fourCheeseChicago, 
                new ChicagoPizza(FlavorsPizza.MARGHERIT),
                ChicagoPizza);
        });
    })

    describe('New York Store', () => {
        let pizzaStore: PizzaStore;
        beforeAll(() => {
            pizzaStore = new NewYorkStore();
        })
        
        it('Should create a four cheese pizza from NewYork', () => {
            const fourCheeseNewYork = pizzaStore.createPizza(FlavorsPizza.FOUR_CHEESE);
            checkPizza(
                fourCheeseNewYork, 
                new NewYorkPizza(FlavorsPizza.FOUR_CHEESE),
                NewYorkPizza);
        });

        it('Should create a bacon pizza from NewYork', () => {
            const fourCheeseNewYork = pizzaStore.createPizza(FlavorsPizza.BACON);
            checkPizza(
                fourCheeseNewYork, 
                new NewYorkPizza(FlavorsPizza.BACON),
                NewYorkPizza);
        });

        it('Should create a Margherit pizza from NewYork', () => {
            const fourCheeseNewYork = pizzaStore.createPizza(FlavorsPizza.MARGHERIT);
            checkPizza(
                fourCheeseNewYork, 
                new NewYorkPizza(FlavorsPizza.MARGHERIT),
                NewYorkPizza);
        });
    })
})