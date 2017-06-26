import foo, { default as defaultFoo } from '../lib/foo';

describe('foo', () => {
  it('should be the same', () => {
    expect(foo).toEqual(defaultFoo);
  });

  it('should yield the same', () => {
    expect(foo()).toEqual(defaultFoo());
  });
});
