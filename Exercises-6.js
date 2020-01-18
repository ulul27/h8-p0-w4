function digitPerkalianMinimum(angka) {
    // you can only write your code here!
    var temp = ''
    var output = []
    for (i = 1; i <= angka; i++) {
        if (angka % i == 0) {
            temp += i
            temp += angka / i
            output.push(Number(temp))
            temp = ''
        }
    }
    // console.log(output);

    for (var i = 0; i < output.length; i++) {
        for (var j = i + 1; j < output.length; j++) {
            if (output[i] > output[j]) {
                var temp = output[i]
                output[i] = output[j]
                output[j] = temp
            }
        }
    }
    // console.log(output);
    return String(output[0]).length
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2