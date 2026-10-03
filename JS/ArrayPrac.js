
let arr = ["Bloomberg", "Microsoft", "Uber","Google","IBM", "Netflix"];

//Removing the first element by demonstrating the usage of shift method.
console.log("Array before deleting the first element:" + arr);
console.log("Deleted Element from the array is:" + " " + arr.shift());
console.log("Array after deleting the first element:" + " " + arr);

// Removing uber and replacing with ola
console.log(arr.splice(1,1,"Ola"));
console.log( arr);

// adding new elements at the end of the array
console.log(arr.push("Amazon"));
console.log( arr);
