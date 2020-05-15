import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppComponent} from './app.component';
import {JokeComponent} from "./components/joke/joke.component";
import {MockComponent} from 'ng-mocks';
import {By} from "@angular/platform-browser";

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        MockComponent(JokeComponent)
      ],
    }).compileComponents();
  }));

  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;
  
  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
  })

  it('should create the app', () => {

    expect(app).toBeTruthy();
  });

  it('shows the joke component', () => {
    let appJokeInstance = fixture.debugElement.query(By.css('app-joke')).componentInstance;
    expect(appJokeInstance).toBeTruthy()
  })

});
