export function remove(arr, item) {
  const i = arr.indexOf(item);
  if (i === -1) return arr;
  return [...arr.slice(0, i), ...arr.slice(i + 1)];
}

export function toggleIn(arr, item) {
  return arr.includes(item) ? remove(arr, item) : arr.concat(item);
}

export function scalarEqual(a, b) {
  return a.length === b.length && a.every((v, i) => v === b[i]);
}

export function difference(a, b) {
  return [...a.filter(v => !b.includes(v)), ...b.filter(v => !a.includes(v))];
}
