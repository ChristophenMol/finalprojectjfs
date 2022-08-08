class ProductsController {
    constructor (name, description, author, price, image, items){
        this.name = name;
        this.description = description;
        this.author = author;
        this.price = price;
        this.image = image;
        this.items = [];
    }
}
const i = new ProductsController();

console.log(i.items);