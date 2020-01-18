/*
 */
function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here
    var asal = 0
    var tujuan = 0
    var ongkos = 0
    var output = []
    for (var i = 0; i < arrPenumpang.length; i++) {
        for (var j = 0; j < rute.length; j++) {
            if (arrPenumpang[i][1] == rute[j]) {
                asal = j
            } else if (arrPenumpang[i][2] == rute[j]) {
                tujuan = j
            }
            ongkos = (tujuan - asal) * 2000
            // console.log(ongkos);
        }
        var objek = {
            Penumpang: arrPenumpang[i][0],
            naikDari: arrPenumpang[i][1],
            tujuan: arrPenumpang[i][2],
            bayar: ongkos,
        }
        output.push(objek)
    }
    return output
}

//TEST CASE
console.log(naikAngkot([
    ['Dimitri', 'B', 'F'],
    ['Icha', 'A', 'B']
]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //