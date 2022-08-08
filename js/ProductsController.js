class ProductsController {
    constructor (currentId = 0){
        this.items = [];
        this.currentId = currentId;
    }

     addItems(name, author, description, image, price, createdAt){
        const newProduct = {
            id: this.currentId++,
            name: name,
            author: author,
            description: description,
            image: image,
            price: price,
            createdAt: createdAt

        }

        this.items.push(newProduct);
        }
    }

 const i = new ProductsController();
 console.log(i.items);
 i.addItems("flamethrow", "Banksy", "graffiti", "image.jpg", 5000000, "Berlin 2011");
 console.log(i.items[0]);


