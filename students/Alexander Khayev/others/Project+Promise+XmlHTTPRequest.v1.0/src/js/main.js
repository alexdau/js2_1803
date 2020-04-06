import Catalog from "./catalog";
import Cart from "./cart";
import HTTP from "./api";

export default function app() {

  addEventListener("load", () => {
    new Catalog(new Cart());
  })


}

