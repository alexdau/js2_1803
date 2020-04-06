export default class CatalogItems{
    constructor (item){
        this.item = item;
    }

    getHTML(){
        return `<div class="product"  data-id="${this.item.id}">
                    <img src="${this.item.img}" alt="${this.item.product_name}" class="product__img">
                    <p class="product__name">${this.item.product_name}</p>
                    <p class="product__price">${this.item.price} &#8381;</p>
                    <input type="button" name="buy" class="product__button" value ="Купить">
                </div>`
    }
}