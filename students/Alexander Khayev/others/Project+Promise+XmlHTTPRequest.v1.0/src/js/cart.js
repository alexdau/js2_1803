import HTTP from './api';

export default class Cart {
  constructor() {
    this.items = [];
    this.total = 0;
    this.sum = 0;
    this.container = '.cart-block';
    this.quantityBlock = document.querySelector('#quantity');
    this.priceBlock = document.querySelector('#price');
    this._init()
  }

  _init() {
    this._initItems()
      .then( r=> {
        this._handleEvents();
      })
  }

  _findItem(id) {
    return this.items.find(product => +product.id_product === +id);
  }

  _handleEvents() {
    document.querySelector(this.container).addEventListener('click', (evt) => {
      if (evt.target.name === 'del-btn') {
        this.deleteProduct(evt.target)
      }
    })
  }

  _initItems() {
    return HTTP.get("/getBasket.json")
      .then(xhr => {
        this.items = JSON.parse(xhr.responseText).contents;
        this._update();
      });
  }

  _update() {
    this._checkTotalAndSum();
    return this.render();
  }

  addProduct(productNode) {
    let prod = this._createNewProduct(productNode);
    HTTP.postObj("/addToBasket.json", prod)
      .then(xhr => {
        let res = JSON.parse(xhr.responseText)
        if (1 === res.result) {
          let find = this._findItem(prod.id_product);
          if (find == undefined) {
            this.items.push(prod);
          } else {
            ++find.quantity;
          }
        } else {
          throw Error('Error add item');
        }
      })
      .then(() => {
        this._update();
      })
      .catch(() => {
        console.log(`Не удалось добавить товар в корзину`);
      });

  }

  _createNewProduct(prod) {
    let img = prod.closest(".product-item");
    if (null == img) {
      img = prod.closest(".cart-item");
    }
    return {
      product_name: prod.dataset['name'],
      price: prod.dataset['price'],
      id_product: prod.dataset['id'],
      quantity: 1,
      img: img.querySelector("img").getAttribute("src")
    }
  }

  deleteProduct(product) {
    return new Promise((resolve, reject) => {
      let prod = this._createNewProduct(product);
      HTTP.postObj("/deleteFromBasket.json", prod)
        .then(xhr => {
          let res = JSON.parse(xhr.responseText);
          if (1 === res.result) {
            let find = this._findItem(prod.id_product);
            if (undefined === find) {
              throw Error('Wrong item for delete');
            }
            if (find.quantity > 1) {
              find.quantity--;
            } else {
              this.items.splice(this.items.indexOf(find), 1);
            }
          } else {
            throw Error('Error delete item');
          }
        })
        .then(()=>{
          this._update();
        })
        .catch(xhr => {
          console.log('не удалось убрать единицу товара из корзины');
        })
    });


  }

  _checkTotalAndSum() {
    let qua = 0;
    let pr = 0;
    this.items.forEach(item => {
      qua += item.quantity;
      pr += item.price * item.quantity
    });
    this.total = qua;
    this.sum = pr;
  }

  render() {
    let itemsBlock = document.querySelector(this.container).querySelector('.cart-items');
    return new Promise((resolve, reject) => {
      let str = '';
      this.items.forEach(item => {
        str += `<div class="cart-item" data-id="${item.id_product}">
                    <img src="${item.img}" alt="" >
                    <div class="product-desc">
                        <p class="product-title">${item.product_name}</p>
                        <p class="product-quantity">${item.quantity}</p>
                        <p class="product-single-price">${item.price}</p>
                    </div>
                    <div class="right-block">
                        <button name="del-btn" class="del-btn" data-id="${item.id_product}">&times;</button>
                    </div>
                </div>`
      });
      resolve(str);
    })
      .then(msg => {
        itemsBlock.innerHTML = msg;
        this.quantityBlock.innerText = this.total;
        this.priceBlock.innerText = this.sum;
      });

  }
}
