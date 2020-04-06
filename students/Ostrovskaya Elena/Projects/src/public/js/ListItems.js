export default class ListItems{
    constructor(item){
        this.item = item;
        this.img = 'https://placehold.it/300x200'
    }
    getProductHTML(){
        return `<div class="product-item">
                    <img src="${this.img}" alt="${this.item.product_name}">
                    <div class="desc">
                        <h1>${this.item.product_name}</h1>
                        <p>${this.item.price}</p>
                        <button 
                        class="buy-btn" 
                        name="buy-btn"
                        data-name="${this.item.product_name}"
                        data-price="${this.item.price}"
                        data-id="${this.item.id_product}"
                        >Купить</button>
                    </div>
                </div>`
    }
}