import { KDEFactory } from "./src/kde-implementation/kde-factory";
import { MacFactory } from "./src/mac-implementation/mac-factory";
import { MacMenu } from "./src/mac-implementation/mac-menu";
import { WidgetFactoryInterface } from "./src/widget-factory.interface";
import { MenuInterface } from "./src/menu.interface";
import { ScrollbarInterface } from "./src/scroll-bar.interface";
import { MacScrollbar } from "./src/mac-implementation/mac-scrollbar";
import { WindowInterface } from "./src/window.interface";
import { MacWindow } from "./src/mac-implementation/mac-window";
import { KDEMenu } from "./src/kde-implementation/kde-menu";
import { KDEScrollbar } from "./src/kde-implementation/kde-scrollbar";
import { KDEWindow } from "./src/kde-implementation/kde-window";

describe('AbstractFactory', () => {

    let kdeFactory: WidgetFactoryInterface;
    let macFactory: WidgetFactoryInterface; 

    beforeEach(() => {
        kdeFactory = new KDEFactory();
        macFactory = new MacFactory();
    })

    describe('Mac Factory', () => {
        it('Should test mac menu', () => {
            const macMenu: MenuInterface = macFactory.createMenu();

            expect(macMenu instanceof MacMenu).toBeTruthy();
            expect(macMenu.getDescription()).toContain('Mac Menu');
            expect(true).toBeTruthy();
        })

        it('Should test mac scrollbar', () => {
            const macScrollbar: ScrollbarInterface = macFactory.createScrollBar();

            expect(macScrollbar instanceof MacScrollbar).toBeTruthy();
            expect(macScrollbar.getDescription()).toContain('Mac Scrollbar');
            expect(true).toBeTruthy();
        })

        it('Should test mac window', () => {
            const macWindow: WindowInterface = macFactory.createWindow();

            expect(macWindow instanceof MacWindow).toBeTruthy();
            expect(macWindow.getDescription()).toContain('Mac Window');
            expect(true).toBeTruthy();
        })
    })

    describe('KDE Factory', () => {
        it('Should test KDE menu', () => {
            const kdeMenu: MenuInterface = kdeFactory.createMenu();

            expect(kdeMenu instanceof KDEMenu).toBeTruthy();
            expect(kdeMenu.getDescription()).toContain('KDE Menu');
            expect(true).toBeTruthy();
        })

        it('Should test KDE scrollbar', () => {
            const kdeScrollbar: ScrollbarInterface = kdeFactory.createScrollBar();

            expect(kdeScrollbar instanceof KDEScrollbar).toBeTruthy();
            expect(kdeScrollbar.getDescription()).toContain('KDE Scrollbar');
            expect(true).toBeTruthy();
        })

        it('Should test KDE window', () => {
            const kdeWindow: WindowInterface = kdeFactory.createWindow();

            expect(kdeWindow instanceof KDEWindow).toBeTruthy();
            expect(kdeWindow.getDescription()).toContain('KDE Window');
            expect(true).toBeTruthy();
        })
    })
});