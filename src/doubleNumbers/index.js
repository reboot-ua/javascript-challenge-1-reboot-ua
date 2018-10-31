/* eslint-disable-next-line */
export const doubleNum = num => {
  // your logic here.
  const numString = num.toString();
  if (numString.length % 2 === 0) {
    const firstPart = numString.substr(0, numString.length / 2);
    const lastPart = numString.substr(numString.length / 2);
    if (firstPart === lastPart) {
      return num;
    }
  }
  return num * 2;
};
