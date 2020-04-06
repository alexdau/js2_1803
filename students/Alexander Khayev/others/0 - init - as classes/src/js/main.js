import Catalog from "./catalog";
import Cart from "./cart";

export default function app() {
  new Catalog(new Cart());
}

