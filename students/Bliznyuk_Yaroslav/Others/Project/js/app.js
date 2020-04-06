
var apiController = (function() {
    
    const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/';

    return {
        makeGETRequest: function (url) {
            return new Promise((resolve, reject) => {
                let xhr = new XMLHttpRequest();
                xhr.open('GET', API_URL + url, true);
                xhr.onload = () => {
                    if (xhr.status >= 200 && xhr.status < 300) {
                        resolve(xhr.response);
                    } else {
                        reject(xhr.statusText);
                    }
                };
                xhr.onerror = () => reject(xhr.statusText);
                xhr.send();
            });
        },
    }
})();


var goodsController = (function(apiCtrl) {
    class GoodsItem {
        constructor(id, title, price) {
            this.id = id;
            this.title = title;
            this.price = price;
        }
        render() {
            return `
            <div class="card mr-2 mb-4 col-md-3 p-0 shadow rounded border border-info" style="width: 12rem;">
              <svg class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Image cap">
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#868e96" />
                <text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text>
              </svg>
              <!-- <img src="img/300x200.png" class="card-img-top" alt="..."> -->
              <div class="card-body">
                <h5 class="card-title">${this.title}</h5>
                <p class="card-text">${this.price}</p>
                <button type="button" class="btn btn-info btn_card_bay" id=${this.id}>Bay</a>
              </div>
            </div>`;
        }
    }

    class GoodsList {
        constructor() {
            this.goods = [];
            this.filteredGoods = [];
        }
        fetchGoods() {
            this.goods = [
                {id: 1, title: 'Product-1', price: 100},
                {id: 2, title: 'Product-2', price: 150},
                {id: 3, title: 'Product-3', price: 200},
                {id: 4, title: 'Product-4', price: 500},
            ]
        }
        fetchGoodsAPI() {
            let goodsList = this;
            apiCtrl.makeGETRequest('catalogData.json')
                .then(data => {
                    data = JSON.parse(data);
                    data.forEach(function(item, index) {
                        let good_item = {
                            id: item.id_product,
                            title: item.product_name,
                            price: item.price
                        }
                        goodsList.goods.push(good_item);  
                        goodsList.filteredGoods.push(good_item);
                        // console.log(goodsList.goods[index]);  
                    });
                })
                .then(() => goodsList.render())
                .catch(error => {
                    console.log(`Get an error (goods): ${error}`);

                });
        }
        render() {
            let listHtml = '';
            this.filteredGoods.forEach(good => {
                const goodItem = new GoodsItem(good.id, good.title, good.price);
                listHtml += goodItem.render();
            });
            // document.querySelector('#catalog').insertAdjacentHTML('beforeend', listHtml);
            document.querySelector('#catalog').innerHTML = listHtml;
        }
        filterGoods(value) {
            const regexp = new RegExp(value, 'i');
            this.filteredGoods = this.goods.filter(good => regexp.test(good.title));
            this.render();
            console.log(this);
        }
        getGoodById(id) {
            for (let i=0; i < this.goods.length; i++) {
                if (this.goods[i].id == id) {
                    return this.goods[i];
                }
            }
            return false;
        }
    }
    var goodsList = new GoodsList();
    // goodsList.fetchGoods();
    goodsList.fetchGoodsAPI();

    return {
        getGoodsList: function() {
            return goodsList;
        }
    };
})(apiController);

var cartController = (function(apiCtrl) {
    class CartItem {
        constructor(product_id, product_name, price, quantity) {
            this.product_id = product_id;
            this.product_name = product_name;
            this.price = price;
            this.quantity = quantity;
        }
        
        render(row_num) {
            return `
                  <tr>
                    <th scope="row">${row_num}</th>
                    <td class="">${this.product_name}</td>
                    <td class="d-flex">
                      <input type="number" class="form-control col-5 cart-row-quantity" 
                            data-target="${this.product_id}" value="${this.quantity}">
                      <button type="button" class="btn btn-outline-dark ml-2 btn-cart-item-del" 
                            data-target="${this.product_id}">Delete</button>
                    </td>
                    <td>${this.price}</td>
                  </tr>
            `;
        }
    }
    class Cart {
        constructor() {
            this.items = [];
            this.amount = 0;
            this.countGoods = 0;
        }
        getCartItems() {
            return this.items; 
        }
        getIndexOfItemId(id) {
            for (let i=0; i < this.items.length; i++) {
                if (this.items[i].product_id == id) {
                    return i;
                }
            }
            return false;
        }
        addItemById(id) {
            var indexOfItemId = this.getIndexOfItemId(id);
            if (indexOfItemId !== false) {
                this.items[indexOfItemId].quantity += 1;
            } else {
                let item = goodsController.getGoodsList().getGoodById(id);
                this.items.push({
                    product_id: item.id,
                    product_name: item.title,
                    price: item.price,
                    quantity: 1
                });
            }
        }
        deleteItemById(id) {
            var indexOfItemId = this.getIndexOfItemId(id);
            this.items.splice(indexOfItemId, 1);
        }
        getCartTotal() {
            var total = 0;
            for (let i = 0; i < this.items.length; i++) {
                total += this.items[i].quantity;
            }
            return total;
        }
        getCartCost() {
            var totalCost = 0;
            for (let i = 0; i < this.items.length; i++) {
                totalCost += this.items[i].quantity * this.items[i].price;
            }
            return totalCost;
        }
        fetchCartAPI() {
            let cart = this;
            apiCtrl.makeGETRequest('getBasket.json')
                .then(data => {
                    data = JSON.parse(data);
                    cart.amount = data.amount;
                    cart.countGoods = data.countGoods;
                    data.contents.forEach(function(item, index) {
                        cart.items.push({
                            product_id: item.id_product,
                            product_name: item.product_name,
                            price: item.price,
                            quantity: item.quantity
                        });  
                        // console.log(cart.items[index]);  
                    });
                })
                .then(() => cart.render())
                .catch(error => {
                    console.log(`Get an error (cart): ${error}`);

                });
        }
        render() {
            var $cart_info = document.getElementById("cart-info");
            if (this.items.length > 0) {
                var $cartTable = document.getElementById("cartTableTemplate").childNodes[1].cloneNode(true);
                var $tbody = $cartTable.childNodes[3];
                for (let i = 0; i < this.items.length; i++) {
                    const cartItem = new CartItem(
                        this.items[i].product_id, 
                        this.items[i].product_name, 
                        this.items[i].price,
                        this.items[i].quantity,
                    );
                    $tbody.insertAdjacentHTML('beforeend', cartItem.render(i + 1));
                }
                var $cartTableDiv = document.getElementById("cartTable");
                $cartTableDiv.innerHTML = "";
                $cartTableDiv.appendChild($cartTable);
                // initCartRowsElements();
                $cart_info.textContent = `${this.getCartTotal()} items in the cart in the amount of ${this.getCartCost()}`;
            } else {
                $cart_info.textContent = "Cart is empty";
                var $cartTableDiv = document.getElementById("cartTable");
                $cartTableDiv.innerHTML = "";
            }
        }
    }
    var cart = new Cart();
    cart.fetchCartAPI();   

    return {
        getCart: function() {
            return cart;
        }
    };

})(apiController);

// APP MAIN CONTROLLER
var controller = (function(goodsCtrl, cartCtrl) {
    var setupEventListeners = function() {
        // Bay button:
        document.querySelector('#catalog').addEventListener('click', ctrlAddItemToCart);
        document.querySelector('#cartTable').addEventListener('click', handleCartRowElementsClick);
        document.querySelector('#header-search').addEventListener('submit', handleHeaderSearch); 
    };

    var ctrlAddItemToCart = function(event) {
        if (event.target.classList.contains('btn_card_bay')) {
            cart = cartCtrl.getCart();
            cart.addItemById(parseInt(event.target.id));
            cart.render();
            // console.log(cart.items);

        }
    };

    var handleCartRowElementsClick = function(event) {
        // console.log(event.target);
        if (event.target.type == 'number' && event.target.classList.contains('cart-row-quantity')) {
            console.log(event.target);
            let product_id = parseInt(event.target.dataset.target);
            let productCartNewQuantity = parseInt(event.target.value);
            let cart = cartCtrl.getCart();
            let productCartIndex = cart.getIndexOfItemId(product_id);
            cart.items[productCartIndex].quantity = productCartNewQuantity;
            cart.render();

        } else if (event.target.type == 'button' && event.target.classList.contains('btn-cart-item-del')) {
            console.log(event.target);
            let product_id = parseInt(event.target.dataset.target);
            let cart = cartCtrl.getCart();
            cart.deleteItemById(product_id);
            cart.render();
        }
    }

    var handleHeaderSearch = function(event) {
        let searchValue = document.getElementById('header-search-input').value;
        goodsCtrl.getGoodsList().filterGoods(searchValue);
        console.log(searchValue);
    }

    return {
        init: function() {
            goodsCtrl.getGoodsList();
            cartCtrl.getCart();
            setupEventListeners();
        }
    }
})(goodsController, cartController);

// Start app
controller.init();
