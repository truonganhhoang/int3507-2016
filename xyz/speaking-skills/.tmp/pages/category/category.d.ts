import { NavController } from 'ionic-angular';
import { CategoryService } from '../../services/category.service';
export declare class Category {
    navCtrl: NavController;
    private categoryService;
    category: Object[];
    constructor(navCtrl: NavController, categoryService: CategoryService);
    ionViewDidLoad(): void;
    enterWord(id: any): void;
}
