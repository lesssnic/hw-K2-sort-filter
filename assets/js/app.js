
(async function(){

    const URL = 'https://fakestoreapi.com/products';

    let products = await fetch(URL);

        products = await products.json();
        
    render(products);

    let searchData = '';
        
    let filterProducts = products;
    
    sortPriceUp.addEventListener('click', function(){

        filterProducts.sort((product1, product2) => +product1.price - +product2.price);

        render(filterProducts);
    });
    
    sortPriceDown.addEventListener('click', function(){

        filterProducts.sort((product1, product2) => +product2.price - +product1.price);
        
        render(filterProducts);
    });

    searchInput.addEventListener('input', function(){
        
        searchData = searchInput.value.toLowerCase();
        
        filterProducts = products.filter(good => good.title.toLowerCase().includes(searchData));

        if (sortPriceUp.checked) {
            filterProducts.sort((product1, product2) => +product1.price - +product2.price);
            };
        if (sortPriceDown.checked) {
            filterProducts.sort((product1, product2) => +product2.price - +product1.price);
            };
        render(filterProducts);
    });

})();

function render(products){
    let divRow = document.querySelector('#goodsPlace');

    divRow.innerHTML = products.map(item => `
    
        <div class="cell p-2">
            <div class="card p-2 pt-4 h-100 shadow">
                <img src="${item.image}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">${item.title}</h5>
                <p class="card-text">${item.description.substring(0, 100)}...</p>
                <h4 class='text-end'>$${item.price}</h4>
                </div>
            </div>
        </div>

    `).join('');
};