/**
huruf kecil = 'abcdefghijklmnopqrstuvwxz'
huruf besar = 'ABCDEFGHIJKLMNOPQRSTUVWXZ'
output = ''
loop kecil
loop besar 
loop kalimat
jika besar == kalimat
output += toLowerCase(besar)
jika kecil == kalimat
ouuput += toUpperCase(kecil)

 */

function tukarBesarKecil(kalimat) {
    // you can only write your code here!
    var hurufKecil = ' abcdefghijklmnopqrstuvwxyz'
    var hurufBesar = ' ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var angka = ' -0123456789!'
    var output = ''


    for (var i = 0; i < kalimat.length; i++) {
        for (var j = 0; j < hurufBesar.length; j++) {
            if (kalimat[i] === hurufBesar[j]) {
                output += hurufKecil[j];
            } else if (kalimat[i] === hurufKecil[j]) {
                output += hurufBesar[j];
            }

        }
        for (var k = 0; k < angka.length; k++) {
            if (kalimat[i] == angka[k]) {
                output += angka[k]
            }
        }
    }
    return output;
}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"