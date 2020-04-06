


/* 1 step 2 step */


class GoodsItem {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
    render() {
        return `<div class="goods-item"><h3>${this.title}</h3><p>${this.price}</p></div>`;
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
            { title: 'Hamood', price: 650 },
            { title: 'Habibi', price: 40 },
            { title: 'Shoes', price: 140 },
            { title: 'Hamooool', price: 230 },
            { title: 'Shoes', price: 100 },
        ];
    }
    render() {
        let listHtml = '';
        this.goods.forEach(good => {
            const goodsItem = new GoodsItem(good.title, good.price);
            listHtml += goodsItem.render()
        });
        document.querySelector('.goods-list').innerHTML = listHtml
    }
    CalculateSum() {
        const sum = null;
        this.goods.forEach(good => {
            const GoodsPrices = this.price;
            this.sum += GoodsPrices
        })
    }
}

const listOfItems = new GoodsList();
listOfItems.fetchGoods();
listOfItems.render();


/* 3 step 4 step */