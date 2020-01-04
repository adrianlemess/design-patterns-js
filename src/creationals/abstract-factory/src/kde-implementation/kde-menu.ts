import { MenuInterface } from "../menu.interface";

export class KDEMenu implements MenuInterface {
    private DESCRIPTION = 'KDE Menu';
    
    getDescription() {
        return this.DESCRIPTION;        
    }
}