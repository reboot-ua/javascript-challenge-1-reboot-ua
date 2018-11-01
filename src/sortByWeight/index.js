/* eslint-disable-next-line */
export const sortByWeight = arr => arr.sort((a, b) => {
  const n = a.toString().split('').reduce((sum, i) => sum + parseInt(i, 10), 0);
  const z = b.toString().split('').reduce((sum, i) => sum + parseInt(i, 10), 0);

  return n - z;
});
