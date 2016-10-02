import { NavController, NavParams } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';
export declare class VideoPlayer {
    navCtrl: NavController;
    private navParams;
    private domSanitizer;
    video: Object;
    url: any;
    constructor(navCtrl: NavController, navParams: NavParams, domSanitizer: DomSanitizer);
    ngOnInit(): void;
    ionViewDidLoad(): void;
}
