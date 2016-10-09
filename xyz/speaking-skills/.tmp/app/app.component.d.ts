import { Nav, Platform } from 'ionic-angular';
export declare class MyApp {
    platform: Platform;
    nav: Nav;
    rootPage: any;
    onDevice: boolean;
    pages: Array<{
        title: string;
        component: any;
    }>;
    constructor(platform: Platform);
    initializeApp(): void;
    openPage(page: any): void;
}
