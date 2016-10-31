import {Component} from '@angular/core';
import { Router } from '@angular/router';
import { CarouselModule} from 'ng2-bootstrap/components/carousel';

@Component({
  selector: 'css-carousel',
  templateUrl: './app/components/carousel/carousel.component.html',
  styleUrls: ['./app/components/carousel/carousel.component.css']
})
export class CarouselComponent {
  titlePage: string = "Sách mềm - Phần mềm hỗ trợ sách giáo khoa";
	myInterval: number = 2000;
	index: number = 0;
	slides: Array<any> = [];
	imgUrl: Array<any> = [
		`./app/assets/carousel-image/class.jpg`,
		`./app/assets/carousel-image/book.jpg`,
		`./app/assets/carousel-image/fun.png`,
		`./app/assets/carousel-image/check.png`
	];

  constructor(private router: Router) {
		for (let i = 0; i < 4; i++) {
			this.addSlide();
		}
	}

	addSlide() {
		let i = this.slides.length;
		this.slides.push({
			image: this.imgUrl[i],
			text: `${['Giáo viên ', 'Học sinh ', 'Phụ huynh ', 'Lớp học '][this.slides.length % 4]}`,
      detail: `${['Có thêm công cụ giảng bài sinh động',
            'Hứng thú, ôn luyện và làm bài tập ',
            'Cùng thầy cô giúp đỡ con cái học tập',
            'Năng động, sôi nổi'][this.slides.length % 4]}`
		});
	}
  
  gotoBook(): void {
    let link = ['books'];
    this.router.navigate(link);
  }
}