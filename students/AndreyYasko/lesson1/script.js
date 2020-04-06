'use strict'
const goods = [
    { title : 'Shirt' , price : 150 },
    { title : 'Socks' , price : 50 },
    { title : 'Jacket' , price : 350 },
    { title : 'Shoes' , price : 250 },
    ];
//функция будет возвращать разметку для конкретного товара,подставляя его название и цену. 
const renderGoodsItem = (title, price) => {
    return `<div class="goods-item"><h3> ${title} </h3><p> ${price} </p></div>` ;
};
//функция будет собирать все товары в один список и записывать его в контейнер .goods-list :
const renderGoodsList = list => {
    let goodsList = list.map(item => renderGoodsItem(item.title, item.price));
    document.querySelector('.goods-list').innerHTML = goodsList;
}
renderGoodsList(goods);