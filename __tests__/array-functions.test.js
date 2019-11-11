import { take } from '../src/array-functions';

describe('Functional Array Functions', () => {
  test('take 2 elements from [1,2,3,4] equal [1,2]', () => {
    const array = [1, 2, 3, 4];
    const n = 2;

    expect(take(array, n)).toEqual([1, 2]);
  });
});
