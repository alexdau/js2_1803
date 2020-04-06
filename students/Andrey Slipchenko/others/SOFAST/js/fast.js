window.onload = () => {
    document.querySelector ('#ok-button'). addEventListener ('click', function () {
        let food1 = new Food ('size', 'add', 'Optional');
        console.log(food1);
    })
};

class Food {
    constructor (size, add, Optional) {
        this.size = this._check (size);
        this.add = this._check (add);
        this.Optional = this._getArray (Optional);
    }
    _check (attrName) {
        let obj = document.querySelector (`input[name=${attrName}]:checked`);
        return obj.value;
    }
    _getArray (attrName) {
        let objArr = [...document.querySelectorAll (`input[name=${attrName}]:checked`)];
        let arr = [];
        objArr.forEach (el => {
            arr.push (el.value)
        });
        return arr;
    }
    CalcPrice() {

    }
    _getPrice() {

    }
    CalcCalories() {

    }
    getCalories() {

    }
    refreshTick() {
        setInterval(() => {

        }, 1000)
    }
}

