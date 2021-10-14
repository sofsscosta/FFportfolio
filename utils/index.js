export const asyncForEach = async (array, callback) => {
  for (let i = 0; i < array.length; i += 1) {
    // eslint-disable-next-line no-await-in-loop
    await callback(array[i], i, array);
  }
};

export const headerHeight = '5rem'

export const convertRemToPixels = (rem) => 
  rem * parseFloat(getComputedStyle(document.documentElement).fontSize);

export const truncate = (input, length) => {
    if (input.length > length) {
      return input.substring(0, length) + '...';
    }
    return input;
};