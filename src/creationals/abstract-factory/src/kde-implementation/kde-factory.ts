import { WidgetFactoryInterface } from "../widget-factory.interface";
import { KDEMenu } from "./kde-menu";
import { KDEScrollbar } from "./kde-scrollbar";
import { KDEWindow } from "./kde-window";

export class KDEFactory implements WidgetFactoryInterface {
    // each method can be singleton too
    createMenu() {
        return new KDEMenu();
    }

    createScrollBar() {
        return new KDEScrollbar();
    }

    createWindow() {
        return new KDEWindow();
    }
}