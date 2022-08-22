
// Initialize a new ItemsController with currentId set to 0
const productsController = new ProductsController(0);


function addItemCard(item){
    const itemHTML = '<div class="card" style="width: 20rem;">\n' +
    '    <img src="'+item.img +'" width="300" height="250"  alt="product image">\n' +
    '    <div class="card-body">\n' +
    '        <h5 class="card-title">'+item.name+'</h5>\n' +
    '        <p class="card-text">'+item.description+'</p>\n' +
    '        <p class="card-text">'+item.price+'<p>\n' +
        '        <a href="#" class="btn btn-primary">Buy</a>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<br/>';
        const productContainer = document.getElementById("list-items");
        productContainer.innerHTML += itemHTML;
    

}

/*function loadStorageSampleData(){
    if(!localStorage.getItem("items")){
        const sampleItems = [{'name':'juice',
        'img':'https://www.gs1india.org/media/Juice_pack.jpg',
        'description':'Orange and Apple juice fresh and delicious'},
        {'name':'Ruffles Chicken',
        'img':'https://s3-ap-southeast-1.amazonaws.com/www8.fairprice.com.sg/fpol/media/images/product/XL/13086598_LXL1.jpg',
        'description':'Ruffles Potato Chips - Chicken'}];
        localStorage.setItem("items", JSON.stringify(sampleItems));
    }
}*/


function loadCardsListFromProductsController(){
    for(var i = 0; i < productsController.items.length; i++){
        const item = productsController.items[i];
        addItemCard(item);
    }
}


productsController.loadItemsFromLocalStorage();
loadCardsListFromProductsController();
// loadStorageSampleData();
