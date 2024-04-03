function tower(n, src, aux, dest) {
  if (n === 1) {
    console.log("Move 1 from rod" + src + "to" + dest);
    return;
  }

  tower(n - 1, src, dest, aux);
  console.log("Move" + n + "from" + src + "to" + dest);
  tower(n - 1, aux, src, dest);
}

//tower(2, "A", "B", "C");

function tohCount(n, from, to, aux) {
  if (n === 1) return 1;
  let left = tohCount(n - 1, from, aux, to);
  let right = tohCount(n - 1, aux, to, from);
  return left + right + 1;
}

console.log(tohCount(3, "A", "B", "C"));
