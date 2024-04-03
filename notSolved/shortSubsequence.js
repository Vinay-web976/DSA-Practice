function shortestCommonSupersequence(X, Y, m, n) {
  const dp = new Array(X.length + 1)
    .fill(null)
    .map(() => new Array(Y.length + 1).fill(0));

  // Fill the dp array using dynamic programming
  for (let i = 1; i <= X.length; i++) {
    for (let j = 1; j <= Y.length; j++) {
      if (X[i - 1] === Y[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  // The length of the smallest string is given by:
  // length(X) + length(Y) - length of LCS(X, Y)
  const lengthOfLCS = dp[X.length][Y.length];
  const lengthOfSCS = X.length + Y.length - lengthOfLCS;

  return lengthOfSCS;
}

console.log(shortestCommonSupersequence("a", "xyll", 1, 4));
