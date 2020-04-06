const goods = [
    { title: 'Shirt', price: 150 },
    { title: 'Socks', price: 50 },
    { title: 'Jacket', price: 350 },
    { title: 'Shoes', price: 250 },      
  ];
  const API_URL = 'https://raw.githubusercontent.com/Dmitriy-Nikolenko/online-store-api/master/responses';
   
 class GoodsItem {
    constructor(title, price) {
      this.product_name = title;
      this.price = price;
    }
    render() {
      return `<div class="goods-item"><h3 class ="goods-name">${this.product_name}</h3><p class = "goods-price">${this.price}</p><button class = "goods-button">Добавить</button></div>`;
    }
  }
  
 class GoodsList {
    constructor() {
      this.goods = [];
    }
    fetchGoods() {
      this.goods = [
        { title: 'Shirt', price: 150 },
        { title: 'Socks', price: 50 },
        { title: 'Jacket', price: 350 },
        { title: 'Shoes', price: 250 },
      ];
    }
    render() {
      let listHtml = '';
      this.goods.forEach(good => {
        const goodItem = new GoodsItem(good.product_name, good.price);
        listHtml += goodItem.render();
      });
      document.querySelector('.goods-list').innerHTML = listHtml;
    }
    fetchGoods(cb) {
      makeGETRequest(`${API_URL}/catalogData.json`, (goods) => {
        this.goods = JSON.parse(goods);
        cb();
        console.log(this.goods);
      })
    }
  
  }
const list = new GoodsList();
list.fetchGoods(() => {
  list.render();
});

  function makeGETRequest(url, callback) {
    
    let  xhr = new XMLHttpRequest();
  
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        callback(xhr.responseText);
      }
    }
  
    xhr.open('GET', url, true);
    xhr.send();
  }

  
  
 