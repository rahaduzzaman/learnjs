/* const sum = (x: number, y: number, z: number) => {
  const args = [x, y, z];
  return args.reduce((a, b) => a + b, 0);
};

console.log(sum(3, 5, 7));
 */
const sum = (...args: number[]) => {
  return args.reduce((a, b) => a + b, 0);
};

console.log(sum(3, 5, 7));
