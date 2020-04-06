export default class CartItems{
    constructor (item){
        this.item = item;
    }

    getHTML(){
        return  `<div class="goods" data-id="${this.item.id}">
                    <img src="${this.item.img}" alt="${this.item.product_name}" class="goods__img">
                    <div class="goods__text">
                        <p class="goods__name">${this.item.product_name}</p>
                        <p class="goods__price">${this.item.price}</p>
                    </div>
                    <input class="goods__count" type="number" min="1" value="${this.item.count}">
                    <p class = "goods__number">&nbsp;шт</p>
                    <div class="goods__delete"><i class="delete far fa-trash-alt"></i></div>
                </div>`    
    }
}