import { WidgetFactoryInterface } from "../widget-factory.interface";
import { MacMenu } from "./mac-menu";
import { MacScrollbar } from "./mac-scrollbar";
import { MacWindow } from "./mac-window";

export class MacFactory implements WidgetFactoryInterface {
    // each method can be singleton too

    createMenu() {
        return new MacMenu();
    }

    createScrollBar() {
        return new MacScrollbar();
    }

    createWindow() {
        return new MacWindow();
    }
}