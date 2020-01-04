import {  WindowInterface } from "../window.interface";

export class MacWindow implements WindowInterface {
    private DESCRIPTION = 'Mac Window';

    getDescription() {
        return this.DESCRIPTION;
    }
}