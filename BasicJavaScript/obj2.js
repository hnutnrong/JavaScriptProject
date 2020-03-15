// Array Object
let product = [
    {
        productName : 'Coke',
        productPrice : '12'
    },
    {
        productName : 'Greentea',
        productPrice : '30'
    }
]

// console.log(product[0].productName);
// console.log(product[0].productPrice);
// console.log(product[1].productName);
// console.log(product[1].productPrice);

//ใช้ loop ในการวน

for(let i = 0; i <= product.length;i++){
    console.log(product[i].productName);
    console.log(product[i].productPrice);
}