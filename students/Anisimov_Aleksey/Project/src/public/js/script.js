'use strict'
let app = new Vue({
    el: '#app',
    data: {
        api_url: 'https://static.trendco.space/js-adv/responses/',
        items: {},
        cart: {},
        searchStr: '',
        whiteListRegExp: /[^0-9a-zа-я.-\s]/gi, //для строки поиска
        filteredItems: {},
        isVisibleCart: false,
    },
    methods: {
        async getData(url) {
            try {
                this.items = await fetch(this.api_url + url).then(res => res.json())
                this.filteredItems = this.items
            }
            catch(err) {
                console.log(err);
            }
        },
        filterGoods(event) {
            this.checkSearchStr() // приводим строку поиска к норм формату
            let regexp = new RegExp(this.searchStr, 'i') // создали регулярку
            this.filteredItems = this.items.filter(good => regexp.test(good.title)) // отфильтровали и записали, следом сразу рендер
        },
        checkSearchStr() {
            this.searchStr = (this.searchStr.trim()).replace(/\s{2,}/g, ' ') // сначала тримим, потом азмена множественных пробелов на один
            this.searchStr = this.searchStr.replace(this.whiteListRegExp, '') // тут делаем замену в строке, останутся только разрешенные символы
        },
        addToCart(event) {
            console.log(event);
            
        }
    },
    computed: {
        
    },
    mounted() {
        this.getData('goods.json')
    },
})
// let mainContainer = document.querySelector('.product')
// let basketTable = document.querySelector('.basket__table')
// let basketEmpty = document.querySelector('.basket__empty')
// let basketImg = document.querySelector('.basket__img')
// let counter = document.querySelector('.item__counter')
// let API_URL = 'https://static.trendco.space/js-adv/'
// //let API_URL = 'http://127.0.0.1:5500/dist/'
// let goods = {}
// //let API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses'

// class Item {
//     constructor() {
//         this.buyBttnCl = '.addToCart'
//         this.itemCont = '.product__item'
//         //this.items = {}
//         this.url = 'goods.json'
//         this.init()
//     }
    
//     delButtons() {
//         return document.querySelectorAll('.basket__delete')
//     }

//     render(item) {
//         return `<div class="product__item" data-id="${item.id}">
//                         <img class="product__img" src="https://static.trendco.space/js-adv/no_foto.jpg" alt="${item.title}">
//                             <div class="product__desc">
//                                 <p class="product__h2">${item.title}</p>
//                                 <p class="product__price" data-price="${item.price}">$ ${item.price}</p>
//                             </div>
//                         <button class="addToCart" data-id="${item.id}">Купить</button>
//                     </div>`
//     }
//     renderList(arr) {
//         let str = '';
//         arr.forEach(item => {
//             str += this.render(item);
//         });
//         return str
//     }


//     addListener(el, func, evnt = 'click') {
//         if (typeof el.length == 'undefined') {
//             el.addEventListener(evnt, func);
//         } else if (el.length > 0 ) {
//             el.forEach(item => item.addEventListener(evnt, func));
//         }
//     }

//     init() {
//         this.getaData()
//             .then(dataResived => {goods = dataResived})
//             .then(() => {
//                 mainContainer.innerHTML = this.renderList(goods)
//             })
//             .finally(() => {
//                 let goodsBtn = document.querySelectorAll(this.buyBttnCl)
//                 this.addListener(goodsBtn, this.actionOnBuyBtn)
                
//             })
//         //this.getaData().then(dataResived => {this.items = dataResived})
//         //this.addListener(basketImg, cart.emptyCart, 'mouseout')
//     }

//     getaData() {
//         return fetch(API_URL + this.url).then(res => res.json()) //{method: 'GET', mode: 'no-cors'}
//     }

//     actionOnBuyBtn() {
//         cart.addItem();
//         //cart.showCart();
//         cart.counter();
//     }
// }

// class Cart {
//     constructor() {
//         this.current = []
        
//     }
//     init() {
//         product.addListener(basketImg, cart.showCart)
//     }
    
//     addItem() {
//         let currentCart = cart.current; // текущая корзина
//         let currItemId = +event.target.dataset.id; // получили id товара по которому кликнули
//         let currItemCartIndx = currentCart.findIndex(item => item.id === currItemId); //нашли (или нет -1) товар в корзине
//         let good = goods.find( el => el.id === currItemId); // нашли товар в БД по id
//         if (currItemCartIndx === (-1)) { // если товара не было в корзине делаем след.
//             currentCart.push({id: currItemId, qtt: 1, summ: good.price}); // добавим в корзину id товара, 1шт кол-во и цену из БД
//             let lastEl = currentCart[currentCart.length -1];
//             this.render(lastEl, good); // отрисуем строку с товаром в корзине
//         } else {
//             currentCart[currItemCartIndx].qtt++;
//             currentCart[currItemCartIndx].summ = good.price * currentCart[currItemCartIndx].qtt;
//             this.render(currentCart[currItemCartIndx], good);
//         }
//         setTimeout(product.addListener(product.delButtons(), cart.delItem), 100);
//         //console.log(cart.current.length);
//     }

//     delItem() {
//         let itemToDelId = +event.target.parentNode.parentNode.dataset.id;
//         let itemToDelIdIndex = cart.current.findIndex( el => el.id === itemToDelId);
//         cart.current.splice(itemToDelIdIndex, 1);
//         event.target.parentNode.parentNode.remove();
//         if (document.querySelectorAll('.basket__table_tr').length === 1) {
//             cart.hideCart()
//             cart.emptyCart()
//         }
//         cart.counter();
//         //console.log(cart.current.length);
//     }

//     render(object, curEl) {
//         let div = document.querySelector(`.basket__table_tr[data-id="${object.id}"]`); //поищем блок с таким товаром
//         if (div === null) { // если нет, то добавим
//             div = document.createElement('div');
//             div.classList.add('basket__table_tr');
//             div.setAttribute('data-id', object.id);
//             let cartStr = `<div class="basket__table_td"><img class="product__img" src="https://static.trendco.space/js-adv/no_foto.jpg" alt="${curEl.title}"></div>
//                         <div class="basket__table_td">${curEl.title}</div>
//                         <div class="basket__table_td">${object.qtt}</div>
//                         <div class="basket__table_td">$&nbsp;${curEl.price}</div>
//                         <div class="basket__table_td">$&nbsp;${object.summ}</div>
//                         <div class="basket__table_td"><img src="https://static.trendco.space/js-adv/trash-alt-solid.svg" alt="Delete Item" class="basket__delete"></div>`;
//             div.innerHTML = cartStr;
//             basketTable.append(div);
//         } else { // если есть
//             div.children[2].innerText = object.qtt; //то прибавим количество
//             div.children[4].innerText = "$ " + object.summ; // и сумму
//         }

//     }

//     counter() {
//         if (cart.current.length > 0) {
//             counter.innerText = cart.current.length;
//             counter.classList.remove('hidden');
//         } else {
//             counter.classList.add('hidden');
//         }

//     }

//     showCart() {
//         if (cart.current.length === 0) {
//             cart.emptyCart()
//         } else {
//             basketTable.classList.toggle('hidden')
//         }
        
//         // if (basketTable.classList.contains('hidden')) {
//         //     basketTable.classList.remove('hidden');
//         // }
//     }
//     hideCart() {
//         basketTable.classList.add('hidden');
//     }

//     emptyCart() {
//         basketEmpty.classList.toggle('hidden')
//         // if (cart.current.length === 0 && event.type === 'mouseover') {
//         //     basketEmpty.classList.remove('hidden');
//         // //} else if (cart.current.length > 0 && event.type === 'mouseover') {
//         // //    cart.showCart();
//         // }
//         // else{
//         //     basketEmpty.classList.add('hidden');
//         //     //cart.hideCart();
//         // }
//     }
// }

// let product = new Item()
// let cart = new Cart()
// cart.init()
// //product.init()