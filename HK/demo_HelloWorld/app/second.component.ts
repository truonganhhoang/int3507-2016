import {Component} from 'angular2/core';
import {RouteParams} from 'angular2/router';

@Component({
  template: `
    <h3>Bull</h3>
    <img src="images/i3.jpg"/>
    <p>Description: Bull - Howdy Texas! I am a genuine Texas lady. I will adore you, follow you anywhere and shower you with happiness from my wiggy waggy tail. I really don't have any faults - I am a housebroken sweetheart. Now I do have a little friend that goes everywhere with me, so if you adopt me, she will come along too. It's never good manners to leave your bestie behind when you are out for an adventure. She is a typical Austin cowgirl - she loves to recycle stuff. Just because you throw it away, doesn't mean she won't go and get it. She likes to take the lead & she will shred your magazines and help you with any pesky papers you might need to get rid of. All in all, we are a fabulous find. If you like them sweet, gentle & housebroken and aren't looking for some tender young thing (we are 9 & 10), we're your forever girls. Check out Lola's video at https://youtu.be/8IBoWwHaMAc.</p>
    
  `
})

export class SecondComponent {

  constructor(private _routeParams:RouteParams) {
    this.id = this._routeParams.get('id');
  }

}
