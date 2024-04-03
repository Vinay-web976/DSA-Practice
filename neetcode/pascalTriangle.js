function pascal(numRows) {
  let res = [[1]];

  for (let i = 1; i < numRows; i++) {
    let temp = [];
    for (let j = 0; j <= i; j++) {
      if(j===0 || j=== i){
        temp.push(1);
      }else{
        const sum = res[i-1][j-1]+ res[i-1][j];
        temp.push(sum);
      }
    }
    res.push(temp);
  }

  return res;
}

console.log(pascal(5));
