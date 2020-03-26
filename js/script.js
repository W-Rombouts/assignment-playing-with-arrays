let array1 = [300,20,60,100,400,130,270,290,30,450,50];

array1.sort(function(a, b){return b-a});
console.log(array1)
array1.pop()
array1.shift()

console.log("Array1 is nu :"+array1)

let array2 = [1,2,3,4,5,6,7,8,9,10];
array3 = array2.map((val, i, arr) => {
    return val * 4;
    });

console.log("array3 is nu:"+array3)

