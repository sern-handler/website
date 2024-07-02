/**
 * Shuffles the elements of an array and returns a new array with the shuffled elements
 * @param arr The array to shuffle
 * @returns A new array with the elements of the input array shuffled
 * @example
 * const shuffledArr = shuffle([1, 2, 3, 4, 5]);
 * console.log(shuffledArr); // [3, 1, 5, 2, 4]
 */
export const shuffle = <T>(arr: T[]): T[] => {
  const newArr = [...arr];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
};
