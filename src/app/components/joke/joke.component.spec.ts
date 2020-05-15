import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {JokeComponent} from './joke.component';
import {JokeService} from "../../services/joke.service";
import {of} from "rxjs";
import {ChuckNorrisApiResponse} from "../../models/chuck-norris-api-response";
import {QuotationMarkPipe} from "../../pipes/quotation-mark.pipe";
import {MockPipe} from "ng-mocks";
import {By} from "@angular/platform-browser";

describe('JokeComponent', () => {
  let component: JokeComponent;
  let fixture: ComponentFixture<JokeComponent>;
  let jokeServiceMock: any;

  beforeEach(async(() => {
    jokeServiceMock = jasmine.createSpyObj(['fetchJoke']);
    jokeServiceMock.fetchJoke.and.returnValue(of({
      type: 'success',
      value: {id: '42', joke: 'expectedJoke'}
    } as ChuckNorrisApiResponse))
    TestBed.configureTestingModule({
      declarations: [
        JokeComponent,
        MockPipe(QuotationMarkPipe, (value) => value + '_processedByMockedPipe')
      ],
      providers: [
        {provide: JokeService, useValue: jokeServiceMock}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('shows joke from API', () => {
    component.showJoke();
    expect(component.joke).toEqual('expectedJoke');
    fixture.detectChanges()
    const jokeFromHtml: HTMLElement = fixture.debugElement.query(By.css('div.alert')).nativeElement;
    expect(jokeFromHtml.innerHTML).toContain('expectedJoke_processedByMockedPipe')
  });
});
