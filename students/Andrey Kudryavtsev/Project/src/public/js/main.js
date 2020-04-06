let catalog = new Vue({
    el: '#catalog',
    data: {
        API: 'https://raw.githubusercontent.com/andykey-krsk/online-store-api/master/responses',
        img: 'https://placehold.it/300x200',
        items: []
    },
    methods: {
        async getData(url) {
            try {
               this.items = await fetch(this.API + url).then(d => d.json()) 
            }
            catch(err) {
                console.log(err)
            }
            finally {
                console.log(this.items)
            }
        }
    },
    mounted() {
        this.getData('/catalogData.json')
    }
})

let cart = new Vue({
    el: '#cart',
    data: {
        API: 'https://raw.githubusercontent.com/andykey-krsk/online-store-api/master/responses',
        items: [],
        img: 'https://placehold.it/300x200',
        cart_show: false
    },
    methods: {
        async getData(url) {
            try {
               this.items = await fetch(this.API + url).then(d => d.json()).then(data => data.contents) 
            }
            catch(err) {
                console.log(err)
            }
            finally {
                console.log(this.items)
            }
        }
    },
    mounted() {
        this.getData('/getBasket.json')
    }
})


// let API = 'https://raw.githubusercontent.com/andykey-krsk/online-store-api/master/responses'; 

// class List {
//     //catalog and cart
//     //containers\
//     constructor(url, container) {
//         this.url = url
//         this.container = container
//         this.items = []
//         this._init()
//     }
//     _init() {
//         return false
//     }
//     getData(url) {
//         return fetch(API + url).then(dataReceived => dataReceived.json())
//     }
//     render() {
//         let block = document.querySelector(this.container)
//         let htmlString = ''
//         this.items.forEach(item => {
//             htmlString += new lists[this.constructor.name](item).render()
//         })
//         block.innerHTML = htmlString

//         if (this.constructor.name == 'Cart'){
//             this._checkTotalAndSum ()
//             this.quantityBlock.innerText = this.total
//             this.priceBlock.innerText = this.sum
//         }
//     }
// }

// class ListItem {
//     constructor(item) {
//         this.item = item
//         this.img = 'https://placehold.it/300x200'
//     }
//     render() {
//         return `
//                <div class="product-item">
//                    <img src="${this.img}" alt="${this.item.product_name}">
//                    <div class="desc">
//                        <h1>${this.item.product_name}</h1>
//                        <p>${this.item.price}</p>
//                        <button 
//                            class="buy-btn" 
//                            name="buy-btn"
//                            data-name="${this.item.product_name}"
//                            data-price="${this.item.price}"
//                            data-id="${this.item.id_product}"
//                        >Купить</button>
//                    </div>
//                </div>
//            `
//     }
// }

// class Catalog extends List {
//     constructor(url, container) {
//         super(url = '/catalogData.json', container = '.products')
//         this.cart = null
//     }
//     _init() {
//         this.getData(this.url)
//             .then(d => {
//                 this.items = d
//             })
//             .then(() => {
//                 this.render()
//             })
//             .finally(() => {
//                 this._handleEvents()
//             })
//     }

//     _handleEvents() {
//         document.querySelector(this.container).addEventListener('click', (evt) => {
//             if (evt.target.name === 'buy-btn') {
//                 this.cart.addProduct(evt.target)
//             }
//         })
//     }
// }

// class Cart extends List {
//     constructor(url, container) {
//         super(url = '/getBasket.json', container = '.cart-items')
//         this.total = 0
//         this.sum = 0
//         this.quantityBlock = document.querySelector ('#quantity')
//         this.priceBlock = document.querySelector ('#price')
//     }
//     _init() {
//         this.getData(this.url)
//             .then(d => {
//                 this.items = d.contents
//             })
//             .then(() => {
//                 this.render()
//             })
//             .finally(() => {
//                 this._handleEvents()
//             })
//     }
//     _handleEvents() {
//         document.querySelector(this.container).addEventListener('click', (evt) => {
//             if (evt.target.name === 'del-btn') {
//                 this.deleteProduct(evt.target)
//             }
//         })
//     }
//     addProduct(item) {
//         console.log('Bought: ' + item.dataset.name)

//         let id = item.dataset['id']
//         let find = this.items.find (product => product.id_product === id)
//         if (find) {
//             find.quantity++
//         } else {
//             let prod = this._createNewProduct (item)
//             this.items.push (prod)
//         }
//         this._checkTotalAndSum ()
//         this.quantityBlock.innerText = this.total
//         this.priceBlock.innerText = this.sum
//         this.render()
//     }
//     _createNewProduct (prod) {
//         return {
//             product_name: prod.dataset['name'],
//             price: prod.dataset['price'],
//             id_product: prod.dataset['id'],
//             quantity: 1
//         }
//     }
//     deleteProduct(item) {
//         console.log('Del: ' + item.dataset.id)
//         let id = item.dataset['id']
//         let find = this.items.find (product => product.id_product === id)
//         if (find.quantity > 1) {
//             find.quantity--
//         } else {
//             this.items.splice (this.items.indexOf(find), 1)
//         }
//         this._checkTotalAndSum ()
//         this.render ()
//     }
//     _checkTotalAndSum () {
//         let qua = 0
//         let pr = 0
//         this.items.forEach (item => {
//             qua += item.quantity
//             pr += item.price * item.quantity
//         })
//         this.total = qua
//         this.sum = pr
//     }
// }

// class CatalogItem extends ListItem {
//     constructor(item) {
//         super(item)
//     }
// }

// class CartItem extends ListItem {
//     constructor(item) {
//         super(item)
//         this.img = 'https://placehold.it/100x80'
//     }
//     render() {
//         return `<div class="cart-item" data-id="${this.item.id_product}">
//                    <img src="${this.img}" alt="">
//                    <div class="product-desc">
//                        <p class="product-title">${this.item.product_name}</p>
//                        <p class="product-quantity">${this.item.quantity}</p>
//                        <p class="product-single-price">${this.item.price}</p>
//                    </div>
//                    <div class="right-block">
//                        <button name="del-btn" class="del-btn" data-id="${this.item.id_product}">&times;</button>
//                    </div>
//                </div>`
//     }
// }

//  let lists = {
//      Catalog: CatalogItem,
//      Cart: CartItem
//  }

// export default function () {
//      let test = new List('/catalogData.json')
//      let testCat = new Catalog()
//      let testCrt = new Cart()
// }