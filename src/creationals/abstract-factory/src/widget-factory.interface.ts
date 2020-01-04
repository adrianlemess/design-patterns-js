import { MenuInterface } from "./menu.interface";
import { ScrollbarInterface } from "./scroll-bar.interface";
import { WindowInterface } from "./window.interface";

export interface WidgetFactoryInterface {
    createMenu: () => MenuInterface
    createScrollBar: () => ScrollbarInterface
    createWindow: () => WindowInterface
}