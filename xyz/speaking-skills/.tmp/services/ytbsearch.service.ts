//Search from youtube
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
 
@Injectable()
export class YtbSearchService {
 	key = 'AIzaSyC-EG5rXbCe3YeLuz0l0bthIhAmpnW0c3Y';
  constructor(private http: Http) {
  }
 	getVideos(myQuery){
 		let stringParamsYoutube= "?key="+this.key+"&type=video&q="+myQuery+"&part=id,snippet&maxResults=20";
 		let url = `https://www.googleapis.com/youtube/v3/search`+stringParamsYoutube;
    return new Promise(resolve => {
      this.http.get(url).subscribe(res => {
        resolve(res.json());
      });
  	}) 
 	}
}