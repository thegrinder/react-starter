import { isEmptyArr, isEmptyObj, omitBy, union, normalize } from '..';

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

  describe('normalize', () => {
    it('should returned normalized data by id', () => {
      const data = [{ id: 'one' }, { id: 'two' }];
      const normalizedData = {
        one: { id: 'one' },
        two: { id: 'two' },
      };
      expect(normalize(data)).toEqual(normalizedData);
    });

    it('should returned normalized data by a custom property', () => {
      const data = [{ customId: 'one' }, { customId: 'two' }];
      const normalizedData = {
        one: { customId: 'one' },
        two: { customId: 'two' },
      };
      expect(normalize(data, 'customId')).toEqual(normalizedData);
    });
  });
});
