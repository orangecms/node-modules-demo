import foo, { bar } from '../lib/bar';

describe('foo', () => {
  it('should not have foo.bar', () => {
    expect(bar).toBeFunction();
    expect(() => foo.bar).toThrow();
  });
});
