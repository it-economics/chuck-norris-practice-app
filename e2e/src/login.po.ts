import { browser, by, element, ProtractorBrowser } from "protractor";

export class LoginPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl + "/login") as Promise<unknown>;
  }

  enterUsername(username: string): Promise<void> {
    return element(by.css("#userName")).sendKeys(username) as Promise<void>;
  }

  enterPassword(pwd: string): Promise<void> {
    return element(by.css("#password")).sendKeys(pwd) as Promise<void>;
  }

  submitLogin(): JokePage {
    element(by.buttonText("Login")).click();
    return new JokePage(browser);
  }

  submitFaultyLogin(): LoginPage {
    element(by.buttonText("Login")).click();
    return this;
  }

  loginErrorText(): Promise<string> {
    return element(by.css(".alert")).getText() as Promise<string>;
  }
}

export class JokePage {
  constructor(private aBrowser: ProtractorBrowser) {
    expect(aBrowser.getCurrentUrl()).toEqual(browser.baseUrl);
  }
}
