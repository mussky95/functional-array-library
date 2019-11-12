import {
  take, skip, map, reduce, filter,
} from '../src/array-functions';

describe('Functional Array Functions', () => {
  test('take 2 elements from [1,2,3,4] equals to [1,2]', () => {
    const array = [1, 2, 3, 4];
    const count = 2;

    expect(take(array, count)).toEqual([1, 2]);
  });

  test('skip 2 elements from [1,2,3,4] equals to [3,4]', () => {
    const array = [1, 2, 3, 4];
    const count = 2;

    expect(skip(array, count)).toEqual([3, 4]);
  });

  test('map([1,2,3], a => a * 2 ) equals to [2,4,6]', () => {
    const array = [1, 2, 3];
    const callback = (a) => a * 2;

    expect(map(array, callback)).toEqual([2, 4, 6]);
  });

  test('reduce([1,2,3,4], (a,b)=>a+b, 1) equals to 11', () => {
    const array = [1, 2, 3, 4];
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const initialValue = 1;

    expect(reduce(array, reducer, initialValue)).toEqual(11);
  });

  test('filter([1,2,3,4,5], a=>a>3) equals to [4,5]', () => {
    const array = [1, 2, 3, 4, 5];
    const callback = (a) => a > 3;

    expect(filter(array, callback)).toEqual([4, 5]);
  });
});
