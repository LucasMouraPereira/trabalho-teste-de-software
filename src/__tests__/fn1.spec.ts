
import { f1 } from '../fn1';

describe('sdsf', () => {
  it('basic', () => {
    expect(f1(true)).toBe(true);
  });

  it('basic again', () => {
    expect(f1(false)).toBe(false);
  });
});
