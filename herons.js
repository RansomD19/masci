console.log(herons(7, 14, 15));

function herons(a, b, c) {
  if (a + b > c) {
    s = (a + b + c) / 2;
    ar = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    return ar.toFixed(2);
  } else {
    return; //impossible to calculate
  }
}
