function digitize(n) {
    var arr = Array.from(String(n), Number); // turns 'n' into string, then array, then number [3, 5, 2, 3, 1]
    arr.reverse(); // reverse the array
    return arr;
  }

console.log(digitize(35231)) // returns [2,3,2,5,3]