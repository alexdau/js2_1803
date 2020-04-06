'use strict';

class Burger {
    constructor(price, calories) {
        this.price = +price;
        this.calories = +calories;
    }
    start () {
        this.getCurrentPrice();
        this.calcCurrentPrice();
        this.getCurrentCalories();
        this.calcCurrentCalories();
        this.renderCalories();
        this.renderPrice();
    }

    getCurrentPrice() {
        this.curretnPrice = +document.querySelector(".price").innerText;
    }

    calcCurrentPrice() {
        this.curretnPrice = this.curretnPrice + this.price;
    }

    getCurrentCalories() {
        this.curretnCalories = +document.querySelector(".calories").innerText;
    }

    calcCurrentCalories() {
        this.curretnCalories = this.curretnCalories + this.calories;
    }

    renderCalories() {
        document.querySelector(".price").innerText = this.curretnPrice;
    }

    renderPrice() {
        document.querySelector(".calories").innerText = this.curretnCalories;
    }
}


let button = document.querySelector('.burgers_button');
button.addEventListener('click',function (event) {
    let checkedForm = event.target.form.elements;
    for (let i = 0; i < checkedForm.length - 1; i++){
        if (checkedForm[i].checked === true){
            const burger = new Burger(checkedForm[i].value, checkedForm[i].dataset.calories);
            burger.start();
        }
    }
});





