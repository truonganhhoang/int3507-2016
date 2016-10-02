import { NavController } from 'ionic-angular';
import { YtbSearchService } from '../../services/ytbsearch.service';
export declare class Youtube {
    navCtrl: NavController;
    private ytbSearchService;
    videos: Object[];
    constructor(navCtrl: NavController, ytbSearchService: YtbSearchService);
    ionViewDidLoad(): void;
    playVideo(video: any): void;
}
