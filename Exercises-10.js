function changeMe(arr) {
    // you can only write your code here!
    var data = {};
    var num = 1;
    var ages;

    for (var i = 0; i < arr.length; i++) {
        // console.log(arr[i]);
        if (arr[i][3] == undefined || arr[i][3] > new Date().getFullYear()) {
            ages = 'Invalid Birth Year'
        } else {
            ages = new Date().getFullYear() - arr[i][3]
        }

        console.log(`${(i+1)}. ${arr[i][0]} ${arr[i][1]} :`);

        var output = {
            firstName: arr[i][0],
            lastName: arr[i][1],
            gender: arr[i][2],
            age: ages,
        }
        console.log(output);
    }
}


// TEST CASES
changeMe([
    ['Christ', 'Evans', 'Male', 1982],
    ['Robert', 'Downey', 'Male']
]);
// 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""