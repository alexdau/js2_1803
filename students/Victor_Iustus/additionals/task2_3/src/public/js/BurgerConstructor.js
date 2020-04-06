import { size, filling, addons } from './CONSTANT.js'

export class Burger {

    constructor() {
        this.price = 0
        this.call = 0

        this.size = {}
        this.filling = {}
        this.addons = []
    }

    updateTotalPrice() {
        this.price = 0
        this.price += (this.size && this.size.price) ? this.size.price : 0
        this.price += (this.filling && this.filling.price) ? this.filling.price : 0

        this.addons.map( addon => {
            this.price += (addon && addon.price) ? addon.price : 0
        })
    }
    updateTotalCall() {
        this.call = 0
        this.call += (this.size && this.size.call) ? this.size.call : 0
        this.call += (this.filling && this.filling.call) ? this.filling.call : 0

        this.addons.map( addon => {
            this.call += (addon && addon.call) ? addon.call : 0
        })
    }

    setSize (size) {
        this.size = size
        this.updateTotalPrice()
        this.updateTotalCall()
    }

    setFilling (filling) {
        this.filling = filling
        this.updateTotalPrice()
        this.updateTotalCall()
    }

    setAddons (addons) {
        this.addons = addons
        this.updateTotalPrice()
        this.updateTotalCall()
    }

    getPrice () {
        return this.price
    }
    getCall () {
        return this.call
    }

}
class BurgerConstructor {

    constructor() {
        this.price = 0
        this.call = 0

        this.size = []
        this.filling = []
        this.addons = []

        this.burger = new Burger()

        this.sizeBlock = document.querySelector ('#size')
        this.fillingBlock = document.querySelector ('#filling')
        this.addonsBlock = document.querySelector ('#addons')
        this.totalBlock = document.querySelector ('#total')
        this.callBlock = document.querySelector ('#call')

        this._init()
    }

    _init () {
        this._handleData ()
        this.render()
        this._handleEvents ()
    }

    _handleData () {
        this.size = size
        this.filling = filling
        this.addons = addons
    }

    _handleEvents () {
        this.sizeBlock.addEventListener ('click', (evt) => {
            if (evt.target.name === 'size') {
                var objSize = this.size.find(item => item.name == evt.target.value);
                this.burger.setSize(objSize)
                this.renderTotal()
            }
        })
        this.fillingBlock.addEventListener ('click', (evt) => {
            if (evt.target.name === 'filling') {
                var objFilling = this.filling.find(item => item.name == evt.target.value);
                this.burger.setFilling(objFilling)
                this.renderTotal()
            }
        })
        this.addonsBlock.addEventListener ('click', (evt) => {
            var objAddons = []
            this.addonsBlock.querySelectorAll('input:checked').forEach( add => {
                var objFilling = this.addons.find(item => item.name == add.name);
                objAddons.push(objFilling)
            })
            this.burger.setAddons(objAddons)
            this.renderTotal()
        })
    }
    renderInput (title, name, value, price, call, required = false) {
        var type = required ? "radio" : "checkbox"
        return `<div class="input-wrap">
            <input id="${name + "_" + value}" type="${type}" name="${name}" value="${value}">
            <label for="${name + "_" + value}">${title}<span> +${price} руб. +${call} калл</span></label>
        </div>`
    }

    RenderSizes () {
        var html = ''
        this.size.forEach( item => {
            html += this.renderInput(item.title, "size", item.name, item.price, item.call, true)
        })
        return html
    }

    RenderFilling () {
        var html = ''
        this.filling.forEach( item => {
            html += this.renderInput(item.title, "filling",  item.name, item.price, item.call, true)
        })
        return html
    }

    RenderAddons () {
        var html = ''
        this.addons.forEach( item => {
            html += this.renderInput(item.title, item.name, item.name, item.price, item.call)
        })
        return html
    }

    render() {
        this.sizeBlock.innerHTML = this.RenderSizes()
        this.fillingBlock.innerHTML = this.RenderFilling()
        this.addonsBlock.innerHTML = this.RenderAddons()
    }
    renderTotal() {
        this.totalBlock.innerHTML = this.burger.getPrice() + " руб"
        this.callBlock.innerHTML = this.burger.getCall() + " калл"
    }
}

export default BurgerConstructor