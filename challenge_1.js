exports.sumOfAMultiple = function(n){
  var sum = 0;

  //do your work here
  var n = [10, 100];//array of n values
  for (i =  0; i < n.length; i++) {//loop through array of n values
    console.log(n[i]);
    var total = 0;
    var newTotal = 0;

    for (i = 0; i < n; i++) {
      //check if number is multiple of 3 or 5
      if (i % 3 == 0 || i % 5 == 0) {
        newTotal = newTotal + i;
      } 
      // console.log(newTotal);
    }
    return newTotal;
    return sum;
  }
};