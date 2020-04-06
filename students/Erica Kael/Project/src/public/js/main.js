let app = new Vue({
    el: '#app',
    data:{
        url: 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/catalogData.json',
        items: [],
        show: false
    },
    methods:{
        async getData() {
            try {
               this.items = await fetch(this.url).then(d => d.json()) 
            }
            catch(err) {
                console.log(err)
            }
            finally {
                console.log(this.items)
            }
        }
    },
    computed:{

    },
    mounted(){
        this.getData()
    }
})


/*const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';


class List{
    constructor(url, container){
        this.url = url
        this.container = container
        this.items = []
        this._init()
    }
    _init(){
        return false
    }
    getData(url){
        return fetch(API_URL + url).then(dataReceived => dataReceived.json())
    }
    render(){
        let block = document.querySelector(this.container)
        let str = ''
        this.items.forEach(item =>{
            str += new lists[this.constructor.name](item).render()
        })
        block.innerHTML = str
        this.quantityBlock.innerText = this.total       
        this.priceBlock.innerText = this.sum
    }
}

class ListItem{
    constructor(item){
        this.item = item
        this.img = 'https://placehold.it/300x200'
    }
    render(){
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
                        data-id="${this.item.id_product}"
                        >Купить</button>
                    </div>
                </div>
        `
    }

}

class Catalog extends List{
    constructor(url, container){
        super(url = '/catalogData.json', container = '.products')
        this.cart = null
        this.filteredGoods = []
    }
    _init(){
        this.getData(this.url)
            .then(d => {
                this.items = d
                this.filteredGoods = d
            })
            .then(() => {this.render()})
            .finally(() => {
                this._handleEvents()
            })
    }
    filterGoods(value){
        const regexp = new RegExp(value, 'i')
        this.items = this.filteredGoods.filter(good => 
            regexp.test(good.product_name))
        this.render()   
    }
    _handleEvents () {
        document.querySelector (this.container).addEventListener ('click', (evt) => {
            if (evt.target.name === 'buy-btn') {
                this.cart.addProduct (evt.target)
            }
        })
        document.querySelector('.btn-search').addEventListener('click', (e)=>{
            const value = document.querySelector('.search-field').value
            this.filterGoods(value)
        })
    }
}

class Cart extends List{
    constructor(url, container){
        super(url = '/getBasket.json', container = '.cart-items')
        this.total = 0
        this.sum = 0
        this.quantityBlock = document.querySelector ('#quantity')
        this.priceBlock = document.querySelector ('#price')
    }
    _init() {
        /*this.getData(this.url)
            .then(d => {this.items = d.contents})
            .then(() => {this.render()})
            .finally(() => {
                this._handleEvents()
            })
            this._handleEvents()
    }
    _handleEvents () {
        document.querySelector (this.container).addEventListener ('click', (evt) => {
            if (evt.target.name === 'del-btn') {
                this.deleteProduct (evt.target)
            }
        })
    }
    addProduct (item){
        let id = item.dataset.id
        let find = this.items.find(item => item.id_product === id)
        if(find){
            find.quantity++
        }else {
            let prod = this._createNewProduct (item)
            this.items.push (prod)
        }
        this._checkTotalAndSum ()
        this.render ()
    }
    _createNewProduct (prod) {
        return {
            product_name: prod.dataset['name'],
            price: prod.dataset['price'],
            id_product: prod.dataset['id'],
            quantity: 1
        }
    }
    _checkTotalAndSum () {
        let qua = 0
        let pr = 0
        this.items.forEach (item => {
            qua += item.quantity
            pr += item.price * item.quantity
            })
        this.total = qua
        this.sum = pr
    }
    deleteProduct(item){
        let id = item.dataset['id']
        let find = this.items.find (item => item.id_product === id)
        if (find.quantity > 1){
            find.quantity--
        }else{
            this.items.splice (this.items.indexOf(find), 1)
        }
        this._checkTotalAndSum ()
        this.render()
    }
}

class CatalogItem extends ListItem{
    constructor(item) {
        super(item)
    }
}

class CartItem extends ListItem{
    constructor(item) {
        super(item)
        this.img = 'https://placehold.it/100x80'
    }
    render() {
        return `<div class="cart-item" data-id="${this.item.id_product}">
                    <img src="${this.img}" alt="">
                    <div class="product-desc">
                        <p class="product-title">${this.item.product_name}</p>
                        <p class="product-quantity">${this.item.quantity}</p>
                        <p class="product-single-price">${this.item.price}</p>
                    </div>
                    <div class="right-block">
                        <button name="del-btn" class="del-btn" data-id="${this.item.id_product}">&times;</button>
                    </div>
                </div>`
    }
}

let lists = {
    Catalog: CatalogItem,
    Cart: CartItem
}
 
export default function app(){
    let catalog = new Catalog();
    let cart = new Cart()

    catalog.cart = cart
}*/
 
 /*//ИМИТАЦИЯ РАБОТЫ БАЗЫ ДАННЫХ И СЕРВЕРА

 let PRODUCTS_NAMES = ['Processor', 'Display', 'Notebook', 'Mouse', 'Keyboard']
 let PRICES = [100, 120, 1000, 15, 18]
 let IDS = [0, 1, 2, 3, 4]
 let IMGS = ['https://cs8.pikabu.ru/post_img/big/2017/12/25/5/1514188160141511997.jpg', 
 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/HMUB2?wid=1144&hei=1144&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1563827752399',
 'https://zeon18.ru/files/item/Xiaomi-Mi-Notebook-Air-4G-Officially-Announced-Weboo-co-2%20(1)_1.jpg',
 'https://files.sandberg.it/products/images/lg/640-05_lg.jpg',
 'https://images-na.ssl-images-amazon.com/images/I/81PLqxtrJ3L._SX466_.jpg']

 //let products = [] //массив объектов

 function makeGETRequest(url, callback) {
    let xhr = new XMLHttpRequest();
  
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        callback(xhr.responseText);
      }
    }
  
    xhr.open('GET', url, true);
    xhr.send();
  }

  const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

 class Catalog{
     constructor(){
         this.items = [];
         this.container = '.products';
         this.cart = null;
     }
     construct (cart) {
        this.cart = cart
        this._init () //_ - это обозначение инкапсулированного метода
    }
    _init () {
        let promise = () =>{
            return new Promise((resolve, reject) => {
              setTimeout(()=>{
                this._handleData();
              },100)
          
              setTimeout(()=>{
                if(this.items.length > 0){
                  resolve(this.items)
                }else{
                  reject('eror')
                }
              },200)
          
            });
          
          } 
          
            promise()
              .then(res =>{
                this.render ()
                this._handleEvents ()
              })
              .catch(rej => {
                console.log(rej);
              })
    }
    _handleEvents () {
        document.querySelector (this.container).addEventListener ('click', (evt) => {
            if (evt.target.name === 'buy-btn') {
                this.cart.addProduct (evt.target)
            }
        })
    }
    _handleData () {
        makeGETRequest(`${API_URL}/catalogData.json`, (items) => {
            this.items = JSON.parse(items);
          })
    }
    render () {
        let str = ''
        this.items.forEach (item => {
            str += `
                <div class="product-item">
                    <img src="https://placehold.it/300x200" alt="${item.product_name}">
                    <!--img src="${item.img}" width="300" height="200" alt="${item.product_name}"-->
                    <div class="desc">
                        <h1>${item.product_name}</h1>
                        <p>${item.price}</p>
                        <button 
                        class="buy-btn" 
                        name="buy-btn"
                        data-name="${item.product_name}"
                        data-price="${item.price}"
                        data-id="${item.id_product}"
                        >Купить</button>
                    </div>
                </div>
            `
        })
        document.querySelector(this.container).innerHTML = str
     }
 }
 

 class Cart{
    constructor(){
        this.items = [],
        this.total = 0,
        this.sum = 0,
        this.container = '.cart-block',
        this.quantityBlock = document.querySelector ('#quantity'),
        this.priceBlock =  document.querySelector ('#price')
    }
    construct () {
        this._init ()
    }
    _init () {
        this._handleEvents ()
    }
    _handleEvents () {
        document.querySelector (this.container).addEventListener ('click', (evt) => {
            if (evt.target.name === 'del-btn') {
                this.deleteProduct (evt.target)
            }
        })
    }
    addProduct (product) {
        let id = product.dataset['id']
        let find = this.items.find (product => product.id_product === id)
        if (find) {
            find.quantity++
        } else {
            let prod = this._createNewProduct (product)
            this.items.push (prod)
        }
         
        this._checkTotalAndSum ()
        this.render ()
    }
    _createNewProduct (prod) {
        return {
            product_name: prod.dataset['name'],
            price: prod.dataset['price'],
            id_product: prod.dataset['id'],
            quantity: 1
        }
    }
    deleteProduct (product) {
        let id = product.dataset['id']
        let find = this.items.find (product => product.id_product === id)
        if (find.quantity > 1) {
            find.quantity--
        } else {
            this.items.splice (this.items.indexOf(find), 1)
        }
         
        this._checkTotalAndSum ()
        this.render ()
    }
    _checkTotalAndSum () {
        let qua = 0
        let pr = 0
        this.items.forEach (item => {
            qua += item.quantity
            pr += item.price * item.quantity
        })
        this.total = qua
        this.sum = pr
    }
    render () {
        let itemsBlock = document.querySelector (this.container).querySelector ('.cart-items')
        let str = ''
        this.items.forEach (item => {
            str += `<div class="cart-item" data-id="${item.id_product}">
                    <img src="https://placehold.it/100x80" alt="">
                    <div class="product-desc">
                        <p class="product-title">${item.product_name}</p>
                        <p class="product-quantity">${item.quantity}</p>
                        <p class="product-single-price">${item.price}</p>
                    </div>
                    <div class="right-block">
                        <button name="del-btn" class="del-btn" data-id="${item.id_product}">&times;</button>
                    </div>
                </div>`
        })
        itemsBlock.innerHTML = str
        this.quantityBlock.innerText = this.total
        this.priceBlock.innerText = this.sum
    }
 }


 const catalog = new Catalog();
 const cart = new Cart();
  

 export default function app(){
     console.log('Jobs done!')
    catalog.construct (cart) //тут происходит создание объекта и вся прочая магия
    cart.construct ()
 }*/
