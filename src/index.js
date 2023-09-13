module.exports = function towelSort (matrix) {
  return matrix ? matrix.reduce((acc, cur, index) => index % 2 ? [...acc, ...cur.reverse()] : [...acc, ...cur], []) : []
}