export const rem = pxValue => `${pxValue / 16}rem`;

export const isEmptyObj = obj => Object.keys(obj).length === 0;

export const isEmptyArr = arr => arr.length === 0;

export const union = (arr1, arr2) => arr1.concat(arr2.filter(i => !arr1.includes(i)));

export const omitBy = (obj, properties) => (
  Object.keys(obj)
    .filter(property => !properties.includes(property))
    .reduce(
      (prev, next) => ({
        ...prev,
        [next]: obj[next],
      }),
      {},
    )
);
