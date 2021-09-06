console.log(pythogras(1, 1));

function pythogras(a, b) {
  let res = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
  if (res > 0) {
    return res.toFixed(2);
  } else {
    return Error;
  }
}
