function digitPerkalianMinimum(angka) {
    // you can only write your code here!
    var minDigit = 0;
    for(var i = 1; i <= angka; i++) {
        if(angka % i === 0) {
            var j = angka / i;
            if(i > j) break;
            var num = String(i) + String(j);
            if(minDigit == 0 || num.length < minDigit) minDigit = num.length;
        }
    }
    return minDigit;
  }
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2