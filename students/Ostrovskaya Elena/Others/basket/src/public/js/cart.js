import List from './List.js'
import CartItems from './CartItems.js'

export default class Cart extends List{
    constructor(url, container){
        super(url = 'cart_product.json', container = '.products');
        //Инконка поверх корзины, отображающая количество продуктов в корзине
        this.count = document.querySelector('.cart__count');
        //Элемент, отображающий общую стоимость
        this.total = document.querySelector('.goods__total');
        //Иконка корзины
        this.iconCart = document.querySelector('.cart');
        //Иконка закрыть корзину
        this.iconClose = document.querySelector('.drop__close');
        this.drop = document.querySelector('.drop');
    }

    /**
     *Инициализируем корзину
     */
    _init(){
        this.getData()
            .then(data => this.items = data)
            .then(this.render.bind(this))
            .finally(()=>{
                this.addEventsListener();
                this.changeCountBadge(this.getCountProduct());  
                this.setTotalSum();
            })
    }

    /**
     *Добавляет ожидание события - открытие корзины
     */
    addEventOpenCart(){
        this.iconCart.addEventListener('click',() => this.drop.style.display = 'block');
    }

    /**
     *Добавляет ожидание события - закрытие корзины
     */
    addEventCloseCart(){
        this.iconClose.addEventListener('click',(evt) => {
            this.drop.style.display = 'none';
            evt.stopPropagation();
        });
    }

    /**
     *Функция добавления товара в корзину       
     *Проверяет есть ли такой товар уже в корзине           
     *Если есть - меняет количество конкретного товара, если нет - добавляет товар       
     */
    addProductInBasket(product){   
        if(this.isProductInBacket(product.id)){
            this.addCountProduct(product.id);
        }
        else{
            this.addNewProduct(product);
        } 
        this.changeCountBadge(this.getCountProduct());  
        this.setTotalSum();  
    }

    /**
     *Функция добавляет новый элемен товара в разметку и массив товаров.          
     *А так же добавляет ему обработчики событий    
     */
    addNewProduct(product){
        let objProduct = this.getNewObjProduct(product);
        this.container.insertAdjacentHTML('beforeend', new CartItems(objProduct).getHTML());
        this.items.push(objProduct);   
    }

        
    /**
     *Добавляем обработчики событий:    
     *Нажатие на кнопку Delete      
     *Изменение количества товара
     */
    addEventsListener(){
        this.container.addEventListener('click', (evt)=>{
            if(evt.target.className.includes("delete")) {
                this.handlerEventDelete(evt);
            }
        })

        this.container.addEventListener('change', this.handlerEventChangeCount.bind(this));
        this.container.addEventListener('keydown', evt => evt.preventDefault());
    }

    /**
     *Обработчик события - изменения количества товара 
     */
    handlerEventChangeCount(evt){
        this.getObjProductById(evt.target.parentNode.dataset.id).count = +evt.target.value;
        console.log(this.items)
        this.changeCountBadge(this.getCountProduct()); 
        this.setTotalSum(); 
    }

    /**
     *Обработка события - нажатие на кнопку удалить продукт из корзины
     */
    handlerEventDelete(evt){
        let product = evt.target.parentNode.parentNode;
        this.deleteProduct(product.dataset.id);
        product.remove();
        this.changeCountBadge(this.getCountProduct()); 
        this.setTotalSum(); 
    }

    /**
     *Функция считаем сумму всех товаров в корзине      
     *Если корзина пуста - выводит пустое поле      
     *Если нет - умножает цену товара на его количество и суммирует всю стоимость
     */
    setTotalSum(){
        if(this.items.length == 0){
            this.total.querySelector('.drop__total').innerText = "";
            return 
        }
        let sum = 0;
        this.items.forEach(function(product){
            let price = product.price;
            let count = +product.count;
            sum += price * count;
        })
        this.total.querySelector('.drop__total').innerText =`${sum} ₽`;
    }


    /**
     *Функция проверяет есть ли уже такой продукт в корзине
     */
    isProductInBacket(id){
        for (let i = 0; i < this.items.length; i++) {
            if(this.items[i].id == id){
                return true;
            }
        }
        return false;
    }

    /**
     *Функция увеличивающая количество конкретного товара на 1
     *
     */
    addCountProduct(id){
        let product = this.getProductById(id);
        product.querySelector('.goods__count').value ++;
        this.getObjProductById(id).count++;
    }

    /**
     *Возвращает новый объект продукта
     */
    getNewObjProduct(product){
        return {
            id: product.id,
            product_name: product.product_name,
            img: product.img,
            price: product.price,
            count: 1
        }
    }


    /**
     *Возвращает элемент продукта из корзины с указанным id
     *
     */
    getProductById(id){
        return this.container.querySelector(`.goods[data-id='${id}']`);
    }

    /**
     *Возвращает объект продукта с указанным id из массива продуктов 
     *
     */
    getObjProductById(id){
        for (let i = 0; i < this.items.length; i++) {
            if(this.items[i].id == id){
                return this.items[i];
            }   
        }
    }


    /**
     *возвращает общее количество товара в корзине
     */
    getCountProduct(){
        return this.items.reduce((count, product) => count + +product.count, 0) 
    }

    /**
     *Функция удаляет продукт из массива с продуктами в корзине
     */
    deleteProduct(id){
        let index = this.items.indexOf(this.getObjProductById(id))
        this.items.splice(index, 1);
    }

    /**
     *Функция изменяет маркер с количеством товаров на иконке корзины
     *Если товаров в корзине нет - маркер убирается и в корзину добавляется сообщение 'В корзине пусто'
     */
    changeCountBadge(count){
        if(count == 0){
            this.count.style.display = 'none';  
            this.total.querySelector('.drop__info').innerText = 'В корзине пусто' ;        
        }
        else{
            this.count.style.display = 'block';  
            this.count.innerHTML = count;
            this.total.querySelector('.drop__info').innerText = 'Total:';
        }  
    }

   
    
}
