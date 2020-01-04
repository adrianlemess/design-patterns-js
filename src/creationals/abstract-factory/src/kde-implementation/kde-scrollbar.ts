import { ScrollbarInterface } from "../scroll-bar.interface";

export class KDEScrollbar implements ScrollbarInterface {
    private DESCRIPTION = 'KDE Scrollbar';

    getDescription() {
        return this.DESCRIPTION;
    }
}