import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {ChuckNorrisApiResponse} from "../models/chuck-norris-api-response";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class JokeService {


  private readonly apiUrl = 'http://api.icndb.com/jokes/random'

  constructor(private httpClient: HttpClient) { }

  fetchJoke(): Observable<ChuckNorrisApiResponse> {
    return this.httpClient.get<ChuckNorrisApiResponse>(this.apiUrl);
  }
}
