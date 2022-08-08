class ProductsController {
    constructor (name, description, author, price, image, items, id){
        this.name = name;
        this.description = description;
        this.author = author;
        this.price = price;
        this.image = image;
        this.items = [];
        this.id = 0++;
    }

    function addItems(){
        return this.items.push();
        }
}

// const i = new ProductsController();


