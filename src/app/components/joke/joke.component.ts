import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observer, PartialObserver} from "rxjs";
import {JokeService} from "../../services/joke.service";
import {ChuckNorrisApiResponse} from "../../models/chuck-norris-api-response";

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.scss']
})
export class JokeComponent implements OnInit {

  joke: string;


  constructor(private jokeService: JokeService) {
  }

  ngOnInit(): void {
  }

  showJoke() {
    let chuckNorrisApiResponseObservable = this.jokeService.fetchJoke();
    chuckNorrisApiResponseObservable.subscribe(
      (apiResponse: ChuckNorrisApiResponse) => { // Implementierung für next()
        this.joke = apiResponse.value.joke
      },
      error => console.error(error), // Implementierung für error(),
      () => console.log('api call completed')) // Implementierung für complete
  }

}
/*
class ChuckNorrisApiObvserver implements Observer<ChuckNorrisApiResponse>{

  next(data){

  }

  error(err) {

  }

  complete() {

  }
}
*/
