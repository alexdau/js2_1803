
  /*renderGoodsList(goods);*/
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

  const API_URL = 'https://raw.githubusercontent.com/Estidre/brad-shop-materials/master';
  

  class GoodsItem {
    constructor(title, price, img = 'img/pi-5.png', id) {
      this.title = title;
      this.price = price;
      this.img = img;
      this.id = id;
    }
    render() {
      return ` <div class="product__item" data-id="${this.id}">
        <a href="product-page.html"><img src="${this.img}" alt="product-img" class="product__photo"></a>
        <a href="product-page.html" class="product__title">
        ${this.title}
        </a>
        <div class="product__price">
        $ ${this.price}
        </div>
        <a href="#" class="add-btn"><img src="img/cart-w.png" alt="cart-icon">Add to Cart</a>
      </div>`;
    }
  }

  class CartItem{
    constructor(title, price, img = 'img/pi-5.png', count, id) {
      this.title = title;
      this.price = price;
      this.img = img;
      this.count = count;
      this.id = id;
    }
    render(){
      return `<div class="header__cart__item d-flex" data-id="${this.id}">
      <div class="d-flex">
        <a href="#" class="cart-item__photo"><img src="${this.img}" alt=""></a>
        <div class="header__cart__info">
          <a href="#" class="cart-item__name">${this.title}</a>
          <div class="cart-item__price">
            <span class="cart-item__price-col">${this.count}</span> x <span class="cart-item__price-cost">$${this.price}</span>
          </div>
        </div>
      </div>
      <div class="cart-btn-del"><i class="fas fa-times-circle"></i></div>
    </div>`
    }
  }


  class GoodsList {
    constructor() {
      this.goods = [];
    }
    fetchGoods() {
      makeGETRequest(`${API_URL}/getBascet.json`, (goods) => {
        this.goods = JSON.parse(goods).goods;
      })

    }
    render() {
      let listHtml = '';
      this.goods.forEach(good => {
        const goodItem = new GoodsItem(good.title, good.price, good.img, good.id);
        listHtml += goodItem.render();
      });
      document.querySelector('.product__content').innerHTML = listHtml;
    }  
  }

 
  class Cart{
    constructor() {
      this.goods = [];
    }
    addToCart(){
      //доделаю позже
    }
    removeCart(){
      //доделаю позже
    }
    render(){
      let listCart = '';
      this.goods.forEach(good => {
        const goodItem = new CartItem(good.title, good.price, good.img, good.count, good.id);
        listCart += goodItem.render();
      });
      document.querySelector('.header__cart__body').innerHTML = listCart;
    }
  }

const list = new GoodsList();


let promise = () =>{
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
      list.fetchGoods();
    },100)

    setTimeout(()=>{
      if(list.goods.length > 0){
        resolve(list.goods)
      }else{
        reject('eror')
      }
    },200)

  });

} 

  promise()
    .then(res =>{
      list.render();
    })
    .catch(rej => {
      console.log(rej);
    })



  


  
 
  
  
  
  