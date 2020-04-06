import List from './List.js'

export default class Catalog extends List{
    constructor(cart,url, container){
        super(url = 'my_store.json', container = '.catalog');
        this.cart = cart;
    }

    /**
     *Инициализируем каталог
     */
    _init(){
        this.getData()
            .then(data => this.items = data)
            .then(this.render.bind(this))
            .finally(this.addEventListeners.bind(this))
    }


    /**
     *Добавляем обработчик событий  - нажатие на кнопку Купить
     */
    addEventListeners(){
        this.container.addEventListener('click', (evt)=>{
            if(evt.target.name == "buy") {
                this.items.forEach(item => {
                    if(item.id == evt.target.parentNode.dataset.id){
                        this.cart.addProductInBasket(item);
                    }
                })   
            }
        })
    }
}