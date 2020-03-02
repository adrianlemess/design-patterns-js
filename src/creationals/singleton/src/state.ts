import { Governament } from "./governament";

export class State {
    name: string;
    ufGovernament: Governament;

    constructor(data) {
        this.name = data.name;
        this.ufGovernament = data.ufGovernament;
    }
}