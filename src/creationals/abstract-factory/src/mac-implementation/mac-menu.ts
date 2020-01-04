import { MenuInterface } from "../menu.interface";

export class MacMenu implements MenuInterface {
    private DESCRIPTION = 'Mac Menu';
    
    getDescription() {
        return this.DESCRIPTION;
    }
}