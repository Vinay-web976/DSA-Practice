function sumTriangles(mat, N) {
  let topTraingle = 0;
  let lowTriangle = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (j === i) {
        topTraingle += mat[i][j];
        lowTriangle += mat[i][j];
      } else if (j < i) {
        lowTriangle += mat[i][j];
      } else {
        topTraingle += mat[i][j];
      }
    }
  }
  return [topTraingle, lowTriangle];
}

console.log(
  sumTriangles(
    [
      [6, 5, 4],
      [1, 2, 5],
      [7, 9, 7],
    ],
    3
  )
);
