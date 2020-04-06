import './public/style/style.css'
import './public/style/normalize.css'

// import './public/js/main'

import Cart from "./public/js/Cart"
import Catalog from './public/js/Catalog'

let cart = new Cart();
let catalog = new Catalog(cart);


// const API = `https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses`;