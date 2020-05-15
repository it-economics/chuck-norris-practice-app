import {Injectable} from '@angular/core';
import {Credentials} from "../models/credentials";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() {
  }

  login(credentials: Credentials) {
    return credentials.password === 'secret'
  }
}
