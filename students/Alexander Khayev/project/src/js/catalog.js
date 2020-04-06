// let PRODUCTS_NAMES = ['Processor', 'Display', 'Notebook', 'Mouse', 'Keyboard']
// let PRICES = [100, 120, 1000, 15, 18]
// let IDS = [0, 1, 2, 3, 4]
// let IMGS = ['https://cs8.pikabu.ru/post_img/big/2017/12/25/5/1514188160141511997.jpg',
//   'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/HMUB2?wid=1144&hei=1144&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1563827752399',
//   'https://zeon18.ru/files/item/Xiaomi-Mi-Notebook-Air-4G-Officially-Announced-Weboo-co-2%20(1)_1.jpg',
//   'https://files.sandberg.it/products/images/lg/640-05_lg.jpg',
//   'https://images-na.ssl-images-amazon.com/images/I/81PLqxtrJ3L._SX466_.jpg']

//let products = [] //массив объектов
import HTTP from './api';

export default class Catalog {
  constructor(cart) {
    this._items = [];
    this.showItems = [];
    this.container = '.products';
    this.cart = cart;
    this._init(); //_ - это обозначение инкапсулированного метода
    this._searchFilter = "";
  }

  get searchFilter() {
    return this._searchFilter;
  }

  set searchFilter(value) {
    if (value !== this._searchFilter) {
      this._searchFilter = value.toLowerCase();
      this.items = this._items;
    }
  }

  get items() {
    return this.showItems;
  }

  set items(value) {
    this._items = value;
    this.showItems = this._items.filter(item =>
      this.searchFilter === "" ||
      item.product_name.toLowerCase().includes(this.searchFilter));
  }

  _init() {
    this._handleData()
      //.then(() => {return this.render()})
      .then(() => {
        this._handleEvents()
      });
  }

  _handleEvents() {
    document.querySelector(this.container).addEventListener('click', (evt) => {
      if (evt.target.name === 'buy-btn') {
        this.cart.addProduct(evt.target);
      }
    });
  }

  _handleData() {
    return new Promise((resolve, reject) => {

      return HTTP.get('/catalogData.json')
        .then((xhr) => {
          this.items = JSON.parse(xhr.responseText);
          resolve();
        })


      // for (let i = 0; i < IDS.length; i++) {
      //   this.items.push(this._createNewProduct(i))
      // }
      // resolve();
    });
  }

  // _createNewProduct(index) {
  //   return {
  //     product_name: PRODUCTS_NAMES [index],
  //     price: PRICES [index],
  //     id_product: IDS [index],
  //     img: IMGS [index]
  //   }
  // }

  // render() {
  //   return new Promise((resolve, reject) => {
  //     let str = '';
  //     this.items.forEach(item => {
  //       str += `
  //               <div class="product-item">
  //                   <!--img src="https://placehold.it/300x200" alt="${item.product_name}"-->
  //                   <img src="${item.img}" width="300" height="200" alt="${item.product_name}">
  //                   <div class="desc">
  //                       <h1>${item.product_name}</h1>
  //                       <p>${item.price}</p>
  //                       <button
  //                       class="buy-btn"
  //                       name="buy-btn"
  //                       data-name="${item.product_name}"
  //                       data-price="${item.price}"
  //                       data-id="${item.id_product}"
  //                       >Купить</button>
  //                   </div>
  //               </div>
  //           `
  //     });
  //     resolve(str);
  //   }).then(str => {
  //     document.querySelector(this.container).innerHTML = str;
  //   });
  //}
}

