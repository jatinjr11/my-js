// var arr = [10,20,30,40,50];
// var brr = arr;
// brr[1] = "ram"
// console.log(arr);
// console.log(brr);

var arr1 = [10,20,30];
var arr2 = [...arr1,100,200,300];
arr2[1] = "indore";
console.log(arr1);
console.log(arr2);

var obj1 = {
    a:10,
    b:20
};

var obj2 = {...obj1};
obj2.a = 50
console.log(obj1);
console.log(obj2);


