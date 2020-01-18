/*
buat variabel abjad = 'abcdefghijklmnopqrstuvwxz'
looping str
looping huruf
kondisi menbandingkan apakah indeks i sama j
jika sama masukan ke output
*/
function urutkanAbjad(str) {
    // you can only write your code here!
    var huruf = 'abcdefghijklmnopqrstuvwxz'
    var output = ''
    for (var i = 0; i < huruf.length; i++) {
        for (var j = 0; j < str.length; j++) {
            if (huruf[i] == str[j]) {
                output += huruf[i]
            }
        }
    }
    return output
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'