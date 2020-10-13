import { remove, toggleIn, scalarEqual, difference } from '../array';

describe('#remove', () => {
  test('leaves array unmutated', () => {
    expect(remove).not.toMutate([1, 2, 3]);
  });

  test('removes an item from an array', () => {
    expect(remove([1, 2, 3], 2)).toEqual([1, 3]);
  });

  test('takes no effect if the item is not present', () => {
    expect(remove([1, 2, 3], 5)).toEqual([1, 2, 3]);
  });

  test('handles an empty array', () => {
    expect(remove([], 2)).toEqual([]);
  });
});

describe('#toggleIn', () => {
  test('leaves array unmutated', () => {
    expect(arr => toggleIn(arr, 2)).not.toMutate([1, 2, 3]);
  });

  test('adds an item when missing', () => {
    expect(toggleIn([1, 2, 3], 4)).toEqual([1, 2, 3, 4]);
  });

  test('removes an item when present', () => {
    expect(toggleIn([1, 2, 3], 2)).toEqual([1, 3]);
  });

  test('removes only one instance of an item', () => {
    expect(toggleIn([1, 2, 3, 3, 4], 3)).toEqual([1, 2, 3, 4]);
  });
});

describe('#scalarEqual', () => {
  test('returns true for same values in same order', () => {
    expect(scalarEqual([1, 'a', true, 5], [1, 'a', true, 5])).toBeTruthy();
  });

  test('returns false for same values in different order', () => {
    expect(scalarEqual([1, true, 'a', 5], [1, 'a', true, 5])).toBeFalsy();
  });

  test('returns true for different values', () => {
    expect(scalarEqual([1, 'a', true], [1, 'a', true, 5])).toBeFalsy();
  });
});

describe('#difference', () => {
  test('leaves arrays unmutated', () => {
    expect(arr => difference(arr, [])).not.toMutate([1, 2, 3]);
    expect(arr => difference([], arr)).not.toMutate([1, 2, 3]);
  });

  test('returns empty array when they are the same', () => {
    expect(difference([1, 2, 3], [1, 2, 3])).toEqual([]);
  });

  test('returns elements in first not in second', () => {
    expect(difference([1, 2, 3, 4, 5], [1, 2, 3])).toEqual([4, 5]);
  });

  test('returns elements in second not in first', () => {
    expect(difference([1, 2, 3], [1, 2, 3, 4, 5])).toEqual([4, 5]);
  });

  test('returns symmetric difference', () => {
    expect(difference([1, 2, 3, 7], [1, 2, 3, 6, 5])).toEqual([7, 6, 5]);
  });
});
