/***
 * Класс "корзина" для интернет-магазина. Содежит в себе только идентификаторы товаров и их количество
 */
class Basket {
  /**
   * @type { {int}: { count: {int} }}
   */
  idOfProducts = {};

  /**
   * Кладем карточку товара в корзину. В качестве параметра сам html объект карточки товара
   * @param {.product[data-id] }
   */
  push(product) {
    if (this.alreadyExist(product.dataset.id)) {
      ++this.idOfProducts[product.dataset.id].count;
    } else {
      this.idOfProducts[product.dataset.id] = {"count": 1};
    }
  }

  /**
   * Удаляет продукт из корзины
   * @param productId
   */
  pop(productId) {
    if (this.idOfProducts[productId].count > 1) {
      --this.idOfProducts[productId].count;
    } else {
      this.idOfProducts = this.idOfProducts.filter(item => item.key != productId)
    }
  }

  /**
   * Проверяем наличие данного товара в корзине
   * @param productId
   * @returns {boolean}
   */
  alreadyExist(productId) {
    return productId in this.idOfProducts;
  }

  /**
   * Общая сумма корзины
   * @returns {number}
   */
  getTotalAmount() {
    let amount = 0;
    for (let key in this.idOfProducts) {
      amount += products[key].price * this.idOfProducts[key].count;
    }
    return amount;
  }

  /**
   * Общее количество позиций в корзине
   * @returns {number}
   */
  getTotal() {
    let total = 0;
    for (let key in this.idOfProducts) {
      total += this.idOfProducts[key].count;
    }
    return total;
  }
}
