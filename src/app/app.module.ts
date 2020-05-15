import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {JokeComponent} from './components/joke/joke.component';
import {HttpClientModule} from "@angular/common/http";
import {QuotationMarkPipe} from './pipes/quotation-mark.pipe';
import {FormsModule} from "@angular/forms";
import {LoginComponent} from "./components/login/login.component";

@NgModule({
  declarations: [
    AppComponent,
    JokeComponent,
    QuotationMarkPipe,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
