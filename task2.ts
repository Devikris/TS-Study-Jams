class Product 
{
  readonly _id: number;
  name: string;
  price: number;

  constructor(_id: number, name: string, price: number) 
  {
    this._id = _id;
    this.name = name;
    this.price = price;
  }
}

class DiscountProduct extends Product 
{
  discountPrice: number;

  constructor(_id: number, name: string, price: number)
  {
    super(_id, name, price);
    this.discountPrice = this.calculateDiscount();
  }

  private calculateDiscount(): number 
  {
    const discountPercentage = 12;
    const discountAmount = (discountPercentage / 100) * this.price;
    return this.price - discountAmount;
  }
}

class Inventory 
{
  readonly _id: number;
  name: string;
  products: Product[];

  constructor(_id: number, name: string, products: Product[]) 
  {
    this._id = _id;
    this.name = name;
    this.products = products;
  }

  getAllProducts(): Product[] 
  {
    return this.products;
  }

  getProductsById(id: number): Product | undefined 
  {
    return this.products.find((product) => product._id === id);
  }
}
const product1 = new Product(1, 'Product 1', 50);
const product2 = new Product(2, 'Product 2', 75);
const product3 = new Product(3, 'Product 3', 100);
const inventory = new Inventory(1, 'Online Store Inventory', [product1, product2, product3]);
console.log('All Products:', inventory.getAllProducts());
console.log('Product with ID 2:', inventory.getProductsById(2));
const discountedProduct = new DiscountProduct(4, 'Discounted Product', 120);
console.log('Discounted Product:', discountedProduct);
