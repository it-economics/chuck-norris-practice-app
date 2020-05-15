import { QuotationMarkPipe } from './quotation-mark.pipe';

describe('QuotationMarkPipe', () => {
  it('converts &quot; to "', () => {
    const pipe = new QuotationMarkPipe();

    expect(pipe.transform('&quot;Hello &quot;World&quot;!')).toEqual('"Hello "World"!')
  });
});
