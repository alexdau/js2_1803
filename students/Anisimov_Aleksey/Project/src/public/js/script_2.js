'use strict'
let API = 'https://json.trendco.space/'

class List {
    constructor(url, container) {
        this.url = url
        this.container = container
        this.items = {}
        this.init()
    }
    init() {
        return false
    }
    render() {
        let div = document.querySelectorAll(this.container)
        let str = '';
        this.items(item => {
            str += new `${this.costructor.name}Item`.render();
        });
        div.innerHTML = str
    }
    get(url) {
        return fetch(API_URL + url, {method: 'GET', mode: 'no-cors'}).then(res => res.json())
    }
    addListener(el, func, evnt = 'click') {
        if (typeof el.length == 'undefined') {
            el.addEventListener(evnt, func);
        } else if (el.length > 0 ) {
            el.forEach(item => item.addEventListener(evnt, func));
        }
    }
    showObject(obj) {
        if (obj.classlist.contains('hidden')) {
            obj.classlist.remove('hidden')
        }
    }
    hideObject(obj) {
        obj.classlist.add('hidden')
    }
}

class ListItem {
    constructor(item) {
        this.item = item
        this.img = 'img/no_foto.jpg'
    }
    render() {
        return `
                <div class="product__item" data-id="${this.item.id}">
                    <img class="product__img" src="${this.item.img}" alt="${this.item.title}">
                        <div class="product__desc">
                            <p class="product__h2">${this.item.title}</p>
                            <p class="product__price" data-price="${this.item.price}">$ ${this.item.price}</p>
                        </div>
                    <button class="addToCart" data-id="${this.item.id}">Купить</button>
                </div>
                `
        }   
}

class Catalog extends List {
    constructor() {
        super(url = 'goods.json', container = '.product')
        this.cart = null
    }
    init() {
        this.tools.get(this.url)
            .then(data => {this.items = data})
            .then( () => {this.render()})
            .finally(() => {
                this.handleEvents()
            })
    }
    handleEvents() {
        document.querySelectorAll(this.container).addEventListener('click', (evn) => {
            if (evn.target.mane === 'addToCart') {
                this.cart.actionOnBuyBtn(evn.target)
            }
        })
    }
}

class Cart extends List {
    constructor() {
        super(url = 'cart.json', container = '.basket__table')
        this.tools = null
    }
    init() {
        this.tools.get(this.url)
            .then(data => {this.items = data})
    }
    
}

class CatalogItem extends ListItem {
    constructor() {
        
    }
    render() {
        return `<div class="product__item" data-id="${this.item.id}">
                    <img class="product__img" src="${this.item.img}" alt="${this.item.title}">
                        <div class="product__desc">
                            <p class="product__h2">${this.item.title}</p>
                            <p class="product__price" data-price="${this.item.price}">$ ${this.item.price}</p>
                        </div>
                    <button class="addToCart" data-id="${this.item.id}">Купить</button>
                </div>`
    }
}

class CartItem extends ListItem {
    constructor() {
        
    }
    render(object, curEl) {
        let str = ''
        let div = document.querySelector(`.basket__table_tr[data-id="${object.id}"]`); //поищем блок с таким товаром
        if (div === null) { // если нет, то добавим
            str = `<div class="basket__table_tr" data-id="${object.id}">
                        <div class="basket__table_td">
                            <img class="product__img" src="img/no_foto.jpg" alt="${curEl.title}"></div>
                            <div class="basket__table_td">${curEl.title}</div>
                            <div class="basket__table_td">${object.qtt}</div>
                            <div class="basket__table_td">$&nbsp;${curEl.price}</div>
                            <div class="basket__table_td">$&nbsp;${object.summ}</div>
                            <div class="basket__table_td"><img src="img/trash-alt-solid.svg" alt="Delete Item" class="basket__delete">
                        </div>
                    </div>`
            div.innerHTML = cartStr;
            basketTable.append(div);
        } else { // если есть
            div.children[2].innerText = object.qtt; //то прибавим количество
            div.children[4].innerText = "$ " + object.summ; // и сумму
        }
        return 
    }
}

let tools = new Tools()
let catalog = new Catalog()
catalog.tools = tools