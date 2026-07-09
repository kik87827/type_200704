// @ts-nocheck
/*
    var product1 = { name : 'shirts', price : 50000 };
    var product2 = { name : 'pants', price : 60000 };
*/
export default function constructorStudy() {
    function Product(name, price) {
        this.name = name;
        this.price = price;
    }
    let pro1 = new Product("shirts", 50000);
    let pro2 = new Product("pants", 60000);
    console.log(pro1, pro2);
}
