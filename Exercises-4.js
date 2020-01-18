function cariModus(arr) {
    // you can only write your code here!
    var arrModus = [];
    var arrCount = [];
    var isFind = false

    for (var i = 0; i < arr.length; i++) {
        // console.log(arr[i]);
        if (arrModus.length == 0) {
            arrModus.push(arr[i])
            arrCount.push(1)
        } else {
            for (var j = 0; j < arrModus.length; j++) {
                // console.log(arrModus[j]);
                if (arr[i] == arrModus[j]) {
                    isFind = true
                    arrCount[j] += 1
                }
            }
            if (isFind == false) {
                arrModus.push(arr[i])
                arrCount.push(1)
            }
        }
    }
    // console.log(arrModus)
    // console.log(arrCount);

    for (var i = 0; i < arrCount.length; i++) {
        for (var j = 0; j < arrCount.length; j++) {
            if (arrCount[i] < arrCount[j]) {
                var temp = arrModus[i]
                arrModus[i] = arrModus[j]
                arrModus[j] = temp
            }
        }
    }

    if (arrCount[0] == arr.length || arrCount.length == arr.length) {
        return -1
    }

    // console.log('-------------------');

    // console.log(arrModus);
    // console.log(arrCount);
    return arrModus[0]
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1