
exports.min = function min (array) {
  for (let key in array) {
  return Math.min(...array);
  }
  return 0;
}

exports.max = function max (array) {
  for (let key in array) {
  return Math.max(...array);
  }
  return 0;
}

exports.avg = function avg (array) {
  for (let key in array) {
  let sum = 0;
  let count = array.length;
  for (i = 0; i < count; i++) {
    sum += array[i];
  }
  return sum/count;
}
return 0;
}
