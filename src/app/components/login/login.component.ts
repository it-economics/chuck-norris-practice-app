import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Credentials} from "../../models/credentials";
import {AuthenticationService} from "../../services/authentication.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginError: boolean

  @Output()
  loginResult = new EventEmitter<boolean>()

  model: Credentials = {
    userName: undefined,
    password: undefined
  }

  constructor(private authenticationService: AuthenticationService) {
  }

  ngOnInit() {
  }

  login() {
    let loginSuccessfull = this.authenticationService.login(this.model);
    this.loginError= !loginSuccessfull
    this.loginResult.emit(loginSuccessfull);
  }

}
