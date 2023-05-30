export default function sliceWithStep(array, start, end, step) {
  const n = [];
  for (let i = start; i < end; i += step) {
    n.push(array[i]);
  }
  return n;
}
