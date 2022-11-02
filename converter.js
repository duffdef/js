function fromNthToTenth(n, base) {
  if (base === 10) return n;
  let res = [];
  const num_str = String(n);
  if (base < 10) {
    for (let i = num_str.length - 1, j = 0; i >= 0; i--, j++)
      res.push(num_str[i] * base ** j);
  } else {
    for (let i = num_str.length - 1, j = 0; i >= 0; i--, j++) {
      if (num_str[i].match(/[A-Z]/)) {
        res.push((num_str[i].charCodeAt(0) - 55) * base ** j);
      } else {
        res.push(num_str[i] * base ** j);
      }
    }
  }
  return res.reduce((acc, val) => acc + Number(val), 0);
}

function fromTenthToNth(n, base) {
  if (base === 10) return n;
  let res = "";
  while (n !== 0) {
    res = res.concat(
      n % base > 9 ? String.fromCharCode((n % base) + 55) : n % base
    );
    n = Math.floor(n / base);
  }
  return res.split("").reverse().join("");
}

function converter(input_base, output_base, number) {
  return fromTenthToNth(fromNthToTenth(number, input_base), output_base);
}
