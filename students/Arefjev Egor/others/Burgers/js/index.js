'use strict';

class cart {
    constructor(size, stuff, mayonnaise, condiment,  price, energy) {
        this.size = size;
        this.stuff = stuff;
        this.mayonnaise = mayonnaise;
        this.condiment = condiment;
        this.price = price;
        this.energy = energy;
        this.render();
        this.eventHandler();
    }

    chooseBurger() {

    }

    eventHandler() {
         let small = document.querySelector('.small');
        let big = document.querySelector('.big');

                small.addEventListener('click',  () => {
                    if(this.size == 'маленький') {
                        return;
                    } else {
                        this.size = 'маленький';
                        this.price = this.price - small.dataset.price;
                        this.render();
                    }

            })

            big.addEventListener('click',  () => {
                if(this.size == 'большой') {
                    return;
                } else {
                    this.size = 'большой';
                    this.price = this.price - small.dataset.price + +big.dataset.price;
                    this.render();
                }

            })
          let stuff = document.querySelector('.select-stuff')
            let priceStuff = 10;
            let calStuff = 20;

            stuff.addEventListener('change',  () => {
                this.price = this.price - priceStuff;
                this.energy = this.energy - calStuff;
                this.stuff = stuff.value;
                priceStuff = document.getElementById(stuff.value).dataset.price;
                calStuff = document.getElementById(stuff.value).dataset.calories;

                this.price = this.price + +priceStuff;
                this.energy = this.energy + +calStuff;
                this.render();
          });
         let condiment = document.querySelector('.condiment');
            condiment.addEventListener('change', () => {
                if (condiment.checked){
                    console.log('ess');
                    this.condiment = 'Посыпать приправой;';
                    this.energy = this.energy + +condiment.dataset.calories;
                    this.price = this.price + +condiment.dataset.price;
                } else {
                    this.condiment = '';
                    this.energy = this.energy - condiment.dataset.calories;
                    this.price = this.price - condiment.dataset.price;
                }
                this.render();
            });

         let mayonnaise = document.querySelector('.mayonnaise');

        mayonnaise.addEventListener('change', () => {
            if (mayonnaise.checked){
                this.mayonnaise = 'Добавить майонез;';
                this.energy = this.energy + +mayonnaise.dataset.calories;
                this.price = this.price + +mayonnaise.dataset.price;
            } else {
                this.mayonnaise = '';
                this.energy = this.energy - mayonnaise.dataset.calories;
                this.price = this.price - mayonnaise.dataset.price;
            }
            this.render();
        })


    }

    render() {
        document.querySelector('.size-u').innerHTML = this.size;
        document.querySelector('.stuff-u').innerHTML = this.stuff;
        document.querySelector('.condiment-u').innerHTML = this.condiment;
        document.querySelector('.mayonnaise-u').innerHTML = this.mayonnaise;
        document.querySelector('.price-u').innerHTML = this.price;
        document.querySelector('.energy-u').innerHTML = this.energy;
    }
}


let test = new cart('маленький', "сыр", "", '', 60, 40);
