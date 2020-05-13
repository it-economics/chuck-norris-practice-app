import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.scss']
})
export class JokeComponent implements OnInit {

  joke: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  showJoke() {
    this.joke = 'Chuck Norris\'s belly button is actually a power outlet.'
  }

}
