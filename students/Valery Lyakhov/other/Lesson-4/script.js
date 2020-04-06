let text = document.querySelector('.text')

class ReplaceText {
    constructor() {
        this.regexp = /\B'(.*?)\B'/g
        this._init()
    }
    _init() {
        this.handleEvents()
    }
    replaceText(value) {
        let str = value.replace(this.regexp, '«$1»')
        text.innerText = str
    }
    handleEvents() {
        document.querySelector('.btn').addEventListener('click', () => {
            this.replaceText(text.innerText)
        })
    }
}

let newText = new ReplaceText();
