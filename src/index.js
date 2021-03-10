module.exports = function reverse (n) {
      let reversNumber;
      let reversNumberTemp;
      let reversNumberToNumber;
      reversNumber = n.toString().split('').reverse().join('');
      if (n < 0) {
            reversNumberTemp = n * -1;
            reversNumberTemp = reversNumberTemp.toString().split('').reverse().join('');
            reversNumberToNumber = Number(reversNumberTemp)
            return reversNumberToNumber;
      }else if (reversNumber.substr(0,1) == 0) {
            reversNumberToNumber = Number(reversNumber.slice(1))
            return reversNumberToNumber;
      } else {
            reversNumber.toString().split('').reverse().join('');
            reversNumberToNumber = Number(reversNumber)
            return reversNumberToNumber;
      }
}