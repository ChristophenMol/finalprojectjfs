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

 i.addItems("flamethrow", "Banksy", "graffiti", "image.jpg", 5000000, "Berlin 2011");
 //console.log(i.items[0]);
 

function addItemCard(item){
    const itemHTML = '<div class="card" style="width: 18rem;">\n' +
        '    <img src="'+item.image+'" class="card-img-top" alt="image">\n' +
        '    <div class="card-body">\n' +
        '        <h5 class="card-title">'++'</h5>\n' +
        '        <p class="card-text">'+item.description+'</p>\n' +
        '        <a href="#" class="btn btn-primary">Add</a>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<br/>';
    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML += itemHTML;
}

addItemCard({'name':'Flowers',
    'image':'../flowers.jpg',
    'description':'Flowers.'});




