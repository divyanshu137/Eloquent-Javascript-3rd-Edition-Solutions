// Your code here.

let arr = [];
function range(start, end, step) {
    if (step == undefined) {
        step = 1;
    }
    for (let i = start; i <= end; i += step)
        arr.push(i);
    return arr;
}


function sum(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; ++i) {
        total += arr[i];
    }
    return total;
}