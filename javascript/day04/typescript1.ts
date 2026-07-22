// function calculateTotal(price:number, quantity:number): number {
//     return price * quantity;
// }

interface ProductData {
    name: string;
    price: number;
    inStock: boolean;
}

const products: ProductData[] = [
    { name: "Laptop", price: 1200, inStock: true },
    { name: "Mouse", price: 25, inStock: false }
];