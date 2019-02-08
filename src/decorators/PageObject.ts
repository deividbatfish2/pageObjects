import {browser} from 'protractor';

export function pageObject(baseUrl: string) {
  return function<T extends { new (...args: any[]): {} }>(Classe: T) {
    return class extends Classe {
      get() {
        browser.get(`http://${baseUrl}`);
      }
    };
  };
}
