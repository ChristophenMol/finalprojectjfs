class ProductsController {
    constructor (name, description, author, price, image, items, currentId = 0){
        this.name = name;
        this.description = description;
        this.author = author;
        this.price = price;
        this.image = image;
        this.items = [];
        this.currentId =;
    }


    // ProductsController.addItem(name, description, image)

    
    function addItems(){
        return this.items.push();
        }
}

// const i = new ProductsController();


