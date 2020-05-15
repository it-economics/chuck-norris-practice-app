import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppComponent} from './app.component';
import {JokeComponent} from "./components/joke/joke.component";
import {MockComponent} from 'ng-mocks';
import {By} from "@angular/platform-browser";
import {LoginComponent} from "./components/login/login.component";

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        MockComponent(JokeComponent),
        MockComponent(LoginComponent)
      ],
    }).compileComponents();
  }));

  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    fixture.detectChanges();
  })

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it('shows the joke component after successfull login', () => {
    expect(app.userIsLoggedIn).toBeFalse()
    let login = fixture.debugElement.query(By.css('app-login')).componentInstance as LoginComponent;
    login.loginResult.emit(true);
    expect(app.userIsLoggedIn).toBeTruthy()
    fixture.detectChanges()
    let appJokeInstance = fixture.debugElement.query(By.css('app-joke')).componentInstance;
    expect(appJokeInstance).toBeTruthy()
  })

});
