import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'quotationMark'
})
export class QuotationMarkPipe implements PipeTransform {

  transform(joke: string, ...args: unknown[]): string {
    if (joke) {

      return joke.replace(/&quot;/g, '"');
    }
    return null;
  }

}
