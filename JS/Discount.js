let items = [250, 645, 300, 900, 50];
let discount = 10;
let new_value = 0;
let final_price=0;
for(let i = 0; i<items.length; i++)
{
    new_value = items[i]*discount/100;
    final_price = items[i]-new_value;
    items[i] = final_price;
    
}
console.log(items);