import Catalog from "./catalog";
import Cart from "./cart";
//import HTTP from "./api";

export default function app() {

  const app = new Vue({
    el: '#app',
    data: {
      name: 'Geek',
      cartTitle: 'Корзина',
      totalItemsTitle: 'Всего товаров: ',
      totalCostTitle: 'Общая стоимость: ',
      searchString: '',
      catalog: new Catalog(new Cart),
    },
    methods: {
      deleteFromCart(event) {
        this.catalog.cart.clickDeleteEvent(event);
      },
      updateSearch() {
        debugger
        this.catalog.searchFilter = this.searchString;
      },
    },
    mounted() {
    },
    computed: {
      cartTotalItems() {
        if (this._data.catalog && this._data.catalog.cart)
        return this._data.totalItemsTitle + this._data.catalog.cart.total;
        else
          return 0;
      },
      cartTotalPrice() {
        if (this._data.catalog && this._data.catalog.cart)
        return this._data.totalCostTitle + this._data.catalog.cart.sum;
        else return 0;
      },
      cartItems() {
        if (this._data.catalog && this._data.catalog.cart)
          return this._data.catalog.cart.items;
        else return 0;
      },
    }
  });
  console.log(app);
  // addEventListener("load", () => {
  //   new Catalog(new Cart());
  // })


}

