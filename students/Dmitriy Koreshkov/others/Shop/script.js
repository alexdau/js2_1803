

let app = new Vue({
  el: "#app",
  data: {
    searchLine: "",
    items:[],
    
    api_url:"https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses",
  },
  methods: {
    
    async getData(){
        try{this.items = await fetch(`${this.api_url}/catalogData.json`).then(d => d.json())
      }
      catch(err){
        console.log(err)
      }
      finally {
        console.log("done")
      }
    },
    
    filterGoods(value){
      let goodsHidden = document.querySelectorAll(".goods-item")
      goodsHidden.forEach(element => {
        element.classList.add("hidden")
        console.log(goodsHidden)
      });
      const regexp = new RegExp (value, 'i');
      let filteredItems = this.items.filter(good => regexp.test(good.product_name));
      console.log(filteredItems)
      //не работает((
      //filteredItems.forEach(element => {
      //element.classList.remove("hidden")
      //});
      
    }

  },

  mounted() {
    this.getData()
  },

});

/*const searchButton = document.getElementById("search-button");
const searchInput = document.getElementById("goods-search");

function makeGETRequest(url,callback){
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function(){
    if(xhr.readyState === 4){
      callback(xhr.responseText); 
    }
  }
  xhr.open("GET", url, true);
  xhr.send();
}

//const API_URL = "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses";

// класс товара
class GoodsItem {
  constructor(title, price) {
    this.product_name = title;
    this.price = price;
  }
  render() {
    return `<div class="goods-item"><h3 class="goods-title"></h3>${this.product_name}</h3><p class="goods-price">${this.price}</p></div>`;
  }
}
// класс список товара
class GoodsList {
  constructor() {
    this.goods = [];
    this.filteredGoods = []
  }
  fetchGoods(cb) {
    makeGETRequest (`${API_URL}/catalogData.json`, (goods) => {
      this.goods = JSON.parse(goods);
      this.filteredGoods = JSON.parse(goods);
      cb();
    })
  }

  filterGoods(value){
    const regexp = new RegExp (value, 'i');
    this.filteredGoods = this.goods.filter(good => regexp.test(good.product_name)); // создаем новый массив  прошедший проверку
    this.render();
  }
  render() {
    let listHtml = "";
    this.filteredGoods.forEach(good => {
      const goodItem = new GoodsItem(good.product_name, good.price);
      listHtml += goodItem.render();
      console.log(listHtml);
    });
    document.querySelector(".goods-list").innerHTML = listHtml;
  }

}

const list = new GoodsList();
list.fetchGoods(() => {list.render();

searchButton.addEventListener("click", (event) => {
  const value = searchInput.value;
  list.filterGoods(value);
})  
})
*/
