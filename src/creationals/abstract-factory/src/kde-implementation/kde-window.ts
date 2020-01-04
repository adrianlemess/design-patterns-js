import { WindowInterface } from "../window.interface";

export class KDEWindow implements WindowInterface {
    private DESCRIPTION = 'KDE Window';
    
    getDescription() {
        return this.DESCRIPTION;
    }
}