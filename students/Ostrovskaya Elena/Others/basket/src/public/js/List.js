let API = "https://raw.githubusercontent.com/Ostrovskaya/js2_1803/master/students/Ostrovskaya%20Elena/Others/basket/"

import CatalogItems from './CatalogItems.js'
import CartItems from './CartItems.js'

let list = {
    Catalog: CatalogItems,
    Cart: CartItems
}

export default class List{
    constructor(url, container){
        this.url = url;
        this.container = document.querySelector(container);
        this.items = [];
        this._init();
    }
    _init(){
        return false;
    }
    render(){
        let str = "";
        this.items.forEach(item => {
            str += new list[this.constructor.name](item).getHTML();
        })
        this.container.innerHTML = str;
    }
    async getData(){
        const res = await fetch(API + this.url);
        return await res.json();
    }
}