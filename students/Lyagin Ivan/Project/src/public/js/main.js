
let API = 'https://raw.githubusercontent.com/Niga9L/js2_1803/master/students/Ostrovskaya%20Elena/Others/basket'; // /getBasket.json

class List {
    //catalog and cart
    //containers\
    constructor(url, container) {
        this.url = url;
        this.container = container;
        this.items = [];
        //console.log(this.constructor.name)
        this._init()
        //this.getData(url)

    }
    _init() {
        return false
    }
    getData(url) {
        return fetch(API + url).then(dataReceived => dataReceived.json())
        // return new Promise ((res, rej) => {
        //     let xhr = new XMLHttpRequest();

        //     xhr.onreadystatechange = function () {
        //         if (xhr.readyState === 4) {
        //             console.log('hello oop')
        //             res(xhr.responseText);
        //         } else {
        //             rej(err)
        //         }
        //     }
        //     xhr.open('GET', url, true);
        //     xhr.send();
        // })
    }
    render() {
        let block = document.querySelector(this.container);
        let htmlString = '';
        this.items.forEach (item => {
           //debugger
            htmlString += new lists[this.constructor.name](item).render()
        });
        block.innerHTML = htmlString;
    }
}


class ListItem {
    constructor(item) {
        this.item = item;
        this.img = 'https://placehold.it/300x200';
    }
    render() {
        return `
                <div class="product-item">
                    <img src="${this.img}" alt="${this.item.product_name}">
                    <div class="desc">
                        <h1>${this.item.product_name}</h1>
                        <p>${this.item.price}</p>
                        <button 
                            class="buy-btn" 
                            name="buy-btn"
                            data-name="${this.item.product_name}"
                            data-price="${this.item.price}"
                            data-id="${this.item.id}"
                        >Купить</button>
                    </div>
                </div>
            `
    }
}

class Catalog extends List {
    constructor(url, container) {
        super(url = '/my_store.json', container = '.products');
        this.cart = null;
    }
    _init() {
        this.getData(this.url)
            .then(d => {this.items = d})
            .then(() => {this.render()})
            .finally(() => {
                this._handleEvents();
            })
    }

    _handleEvents () {
        document.querySelector (this.container).addEventListener ('click', (evt) => {
            if (evt.target.name === 'buy-btn') {
                this.cart.addProduct (evt.target);
                this.cart.getTotalPrice();
                this.cart.renderPrice();
                this.cart.renderIndex();
            }
        })
    }
}

class Cart extends List {
    constructor(url, container) {
        super(url = '/cart_produt.json', container = '.cart-items');
        this.cartList = {};
        this.cartMass = [];
    }
    _init() {
        this.getData(this.url)
            .then(d => {this.items = d})
            .then(() => {this.render()})
            .finally(() => {
                this._handleEvents()
            })
    }
    _handleEvents () {
        document.querySelector (this.container).addEventListener ('click', (evt) => {
            if (evt.target.name === 'del-btn') {
                this.deleteProduct (evt.target);
                this.getTotalPrice();
                this.renderPrice();
                this.renderIndex();
            }
        })
    }

    deleteProduct(item){

        for(let i = 0; i < this.cartMass.length; i++) {
            if( this.cartMass[i].id === item.dataset.id) {
                this.cartMass.splice(i,1);
            }
        }
    }
    addProduct(item) {
        /*if (this.cartList[item.dataset.id] === undefined){
            this.cartList[item.dataset.id] = {
                name: item.dataset.name,
                price: item.dataset.price,
                count: 1,

            };
            console.log(this.cartList);
        } else {
            this.cartList[item.dataset.id].count++;
        }
        console.log(this.cartList);*/

        if (this.cartMass.find(id => id.id === item.dataset.id)){

            this.cartMass.find(id => id.id === item.dataset.id).count++;

        } else {

            this.cartMass.push({
                id: item.dataset.id,
                product_name: item.dataset.name,
                price: item.dataset.price,
                count: 1,
            })
        }


    }
    getTotalPrice() {
        this.totalPrice = 0;
        this.cartMass.forEach(item =>{
            this.totalPrice += item.price * item.count;
        });

    }
    renderPrice() {
        let priceBox = document.getElementById("price")
        priceBox.innerText = this.totalPrice;
    }
    renderIndex(){
        let block = document.querySelector(this.container);
        let htmlString = '';
        this.cartMass.forEach(item =>{
            htmlString += new lists[this.constructor.name](item).render()
        });
            block.innerHTML = htmlString;
        }
}

    class CatalogItem extends ListItem {
        constructor(item) {
            super(item)
        }
    }

    class CartItem extends ListItem {
        constructor(item) {
            super(item);
            this.img = 'https://placehold.it/100x80';
        }
        render() {
            //debugger

            return `<div class="cart-item" data-id="${this.item.id}">
                    <img src="${this.img}" alt="">
                    <div class="product-desc">
                        <p class="product-title">${this.item.product_name}</p>
                        <p class="product-quantity">${this.item.quantity}</p>
                        <p class="product-single-price">${(this.item.price)*this.item.count}</p>
                    </div>
                    <div class="right-block">
                        <button name="del-btn" class="del-btn" data-id="${this.item.id}">&times;</button>
                    </div>
                </div>`
        }
    }

    let lists = {
        Catalog: CatalogItem,
        Cart: CartItem
    };

    export default function () {
    let test = new List('/my_store.json');
    let testCat = new Catalog();
    let testCrt = new Cart();

    testCat.cart = testCrt;
}