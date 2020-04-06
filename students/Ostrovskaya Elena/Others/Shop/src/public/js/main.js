import Cart from './Cart.js'
import Catalog from './Catalog.js'
 //ИМИТАЦИЯ РАБОТЫ БАЗЫ ДАННЫХ И СЕРВЕРА


 window.addEventListener('load', function () {
   let cart = new Cart ();
   let catalog = new Catalog(cart);
})
