import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { Vocabulary } from '../vocabulary';

@Injectable()
export class VocabularyService {
	constructor(private http:Http){
		console.log('Init...');
	}

	getAllVoca(){
		return this.http.get('http://localhost:3000/vocabulary')
			.map(res => res.json());
	}

	addVoca(newVoca){
		//console.log(newVoca);
		var headers = new Headers();
		headers.append('Content-Type', 'application/json');
		return this.http.post('http://localhost:3000/vocabulary/new', JSON.stringify(newVoca), {headers: headers})
			.map(res => res.json());
	}

	deleteVoca(id){
		return this.http.delete('/vocabulary/' + id)
			.map(res => res.json());
	}





















	/*private heroesUrl = 'app/heroes';  // URL to web api
	private handleError(error: any): Promise<any> {
	  console.error('An error occurred', error); // for demo purposes only
	  return Promise.reject(error.message || error);
	}
	private headers = new Headers({'Content-Type': 'application/json'});

	update(hero: Hero): Promise<Hero> {
	  const url = `${this.heroesUrl}/${hero.id}`;
	  return this.http
	    .put(url, JSON.stringify(hero), {headers: this.headers})
	    .toPromise()
	    .then(() => hero)
	    .catch(this.handleError);
	}

  	constructor(private http: Http) { }

	getHeroes(): Promise<Hero[]> {
	return this.http.get(this.heroesUrl)
	           .toPromise()
	           .then(response => response.json().data as Hero[])
	           .catch(this.handleError);
	}

  getHeroesSlowly(): Promise<Hero[]> {
  return new Promise<Hero[]>(resolve =>
    setTimeout(resolve, 2000)) // delay 2 seconds
    .then(() => this.getHeroes());
  };
  getHero(id: number): Promise<Hero> {
  return this.getHeroes()
             .then(heroes => heroes.find(hero => hero.id === id));
  }

  create(name: string): Promise<Hero> {
	  return this.http
	    .post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
	    .toPromise()
	    .then(res => res.json().data)
	    .catch(this.handleError);
	}

  delete(id: number): Promise<void> {
	  const url = `${this.heroesUrl}/${id}`;
	  return this.http.delete(url, {headers: this.headers})
	    .toPromise()
	    .then(() => null)
	    .catch(this.handleError);
    }*/

}
