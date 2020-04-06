'use strict'
   
import Cart from './cart.js'
import Catalog from './catalog.js'


window.addEventListener('load', ()=>{
   const cart = new Cart();
   const catalog = new Catalog(cart);

   cart.addEventOpenCart();
   cart.addEventCloseCart();
})













