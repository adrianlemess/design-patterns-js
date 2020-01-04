import { ScrollbarInterface } from "../scroll-bar.interface";

export class MacScrollbar implements ScrollbarInterface {
    private DESCRIPTION = 'Mac Scrollbar';
    
    getDescription() {
        return this.DESCRIPTION;
    }
}