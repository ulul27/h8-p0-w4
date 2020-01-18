function ubahHuruf(kata) {
    // you can only write your code here!
    var output = ''
    var huruf = 'abcdefghijklmnopqrstuvwxz'
    for (var i = 0; i < kata.length; i++) {
        for (var j = 0; j < huruf.length; j++) {
            // console.log(huruf[j]);
            if (kata[i] == huruf[j]) {
                output += huruf[j + 1]
            }
        }
    }

    return output
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu