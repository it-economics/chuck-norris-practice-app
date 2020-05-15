import {JokeService} from './joke.service';
import {of} from "rxjs";
import {delay} from "rxjs/operators";

describe('JokeService', () => {
  let service: JokeService;
  let httpClientMock: any

  beforeEach(() => {
    httpClientMock = jasmine.createSpyObj(['get'])
    service = new JokeService(httpClientMock);
  });

  it('calls Chuck Norris API', (done) => {
    let expectedChuckNorrisApiResponse = {type: 'success', value: {id: '42', joke: 'expected'}};
    httpClientMock.get.and.returnValue(of(expectedChuckNorrisApiResponse).pipe(delay(100)))
    service.fetchJoke().subscribe(response => {
      expect(response).toBe(expectedChuckNorrisApiResponse);
      expect(httpClientMock.get).toHaveBeenCalledWith('http://api.icndb.com/jokes/random')
      done();
    })
  });
});
