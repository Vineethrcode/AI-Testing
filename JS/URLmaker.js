/*
You have a product name: "Official Nike Running Shoes".
Task: Turn this into a URL-friendly string by making it all lowercase and replacing the spaces with dashes.
Result: "official-nike-running-shoes"
*/
let str = "Official Nike Running Shoes";
let lc = str.toLowerCase().replaceAll(" ", "-");
console.log(lc);
