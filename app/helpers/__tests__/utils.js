import {
  isEmptyArr,
  isEmptyObj,
  omitBy,
  union,
} from '../utils';

describe('utils', () => {
  describe('isEmptyObj', () => {
    it('should return true if an object is empty', () => {
      expect(isEmptyObj({})).toEqual(true);
    });

    it('should return false if an object is not empty', () => {
      expect(isEmptyObj({ test: 'test' })).toEqual(false);
    });
  });

  describe('isEmptyArr', () => {
    it('should return true if an array is empty', () => {
      expect(isEmptyArr([])).toEqual(true);
    });

    it('should return false if an array is not empty', () => {
      expect(isEmptyArr(['test'])).toEqual(false);
    });
  });

  describe('omitBy', () => {
    it('should return object without specified keys', () => {
      expect(omitBy({ one: 1, two: 2 }, ['two'])).toEqual({ one: 1 });
    });

    it('should return the same object if specified keys not found', () => {
      expect(omitBy({ one: 1 }, ['two'])).toEqual({ one: 1 });
    });
  });

  describe('union', () => {
    it('should return merged array without duplicates', () => {
      expect(union([1, 2], [2, 3])).toEqual([1, 2, 3]);
      expect(union([1, 2], [])).toEqual([1, 2]);
    });
  });
});
