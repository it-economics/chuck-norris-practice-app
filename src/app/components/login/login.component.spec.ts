import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LoginComponent} from './login.component';
import {FormsModule} from '@angular/forms';
import {AuthenticationService} from "../../services/authentication.service";

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authenticationServiceMock;

  beforeEach(async(() => {
    authenticationServiceMock = jasmine.createSpyObj(['login'])
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [FormsModule],
      providers: [
        { provide: AuthenticationService, useValue: authenticationServiceMock },
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('emits event when loginService returns true', (done) => {
    component.model.userName = 'max'
    component.model.password = 'expected'
    authenticationServiceMock.login.and.returnValue(true);
    component.loginResult.subscribe(event => {
      expect(event).toBeTruthy();
      done()
    })
    component.login();
    expect(authenticationServiceMock.login).toHaveBeenCalledWith({userName:'max', password:'expected'});
  })

});
