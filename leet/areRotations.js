function areRotations(s1, s2) {
  const concatenated = s2 + s2;

  return concatenated.includes(s1);
}

console.log(areRotations("geeksforgeeks", "forgeeksgeeks"));
