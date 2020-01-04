import { WidgetFactoryInterface } from "./src/widget-factory.interface"
import { MacFactory } from "./src/mac-implementation/mac-factory";
import { MenuInterface } from "./src/menu.interface";
import { WindowInterface } from "./src/window.interface";
import { ScrollbarInterface } from "./src/scroll-bar.interface";
import { KDEFactory } from "./src/kde-implementation/kde-factory";


export const startAbstractFactory = () => {

    // MacFactory
    const macFactory: WidgetFactoryInterface = new MacFactory();

    const macMenu: MenuInterface = macFactory.createMenu();
    const macWindow: WindowInterface = macFactory.createWindow();
    const macScrollbar: ScrollbarInterface = macFactory.createScrollBar();

    console.log(macMenu.getDescription());
    console.log(macWindow.getDescription());
    console.log(macScrollbar.getDescription());

    // KDE Implementation
    const kdeFactory: WidgetFactoryInterface = new KDEFactory();
    
    const kdeMenu: MenuInterface = kdeFactory.createMenu();
    const kdeWindow: WindowInterface = kdeFactory.createWindow();
    const kdeScrollbar: ScrollbarInterface = kdeFactory.createScrollBar();

    console.log(kdeMenu.getDescription());
    console.log(kdeWindow.getDescription());
    console.log(kdeScrollbar.getDescription());
}