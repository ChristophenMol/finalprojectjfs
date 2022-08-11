
//task 4
class ProductsController {
    constructor (currentId = 0){
        this.items = [];
        this.currentId = currentId;
    }

     addItems(name, author, description, image, price, createdAt){
        const item = {
            id: id,
            name: name,
            author: author,
            description: description,
            image: image,
            price: price,
            createdAt: createdAt

        }

        this.items.push(item);
    }
    loadItemsFromLocalStorage() {
        const storageItems = localStorage.getItem("items")
        if (storageItems) {
            const items = JSON.parse(storageItems)
            for (var i = 0, size = items.length; i < size; i++) {
                const item = items[i];
                this.items.push(item);
                console.log(items.id);
    }
            }
        }
    }

