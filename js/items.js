const productsController = new ProductsController;

function addItemCard(item){
    const itemHTML = '<div class="card" style="width: 18rem;">\n' +
        '    <img src="'+item.image +'">\n' +
        '    <div class="card-body">\n' +
        '        <h5 class="card-title">'+item.name+'</h5>\n' +
        '        <p class="card-text">'+item.description+'</p>\n' +
        '        <a href="#" class="btn btn-primary">Add</a>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<br/>';
    let itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML = itemHTML;
}



function loadStorageSampleData(){
    if(!localStorage.getItem("items")){
        const sampleItems = [{'name':'',
        'image':'',
        'description':''},
        {'name':'Cherry Blossoms',
        'image':'https://www.pexels.com/photo/selective-focus-photography-of-pink-cherry-blossom-flowers-2099737/',
        'description':'Cherry Blossoms'}];
        localStorage.setItem("items", JSON.stringify(sampleItems));
    }
}

function loadCardsListFromProductsController(){
    for(var i = 0, size = productsController.items.length; i < size ; i++){
        const item = productsController.items[i];
        addItemCard(item);
    }
}


loadStorageSampleData();
productsController.loadItemsFromLocalStorage();
loadCardsListFromProductsController();
