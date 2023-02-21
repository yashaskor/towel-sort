
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let res = [];
  for (let elem=0; elem<matrix.length;elem++) {  
      if (!(elem%2)) {
        res.push(matrix[elem])
      } else {
        res.push(matrix[elem].reverse());    
      }      
  }
  const towel = res.reduce((total, amount) => {
    return total.concat(amount);
  }, []);
  return towel;
}
