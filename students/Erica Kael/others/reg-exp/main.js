let text = document.querySelector('.text')

class ReplaceStr {
    constructor(){
        this.regexp = /\B'\b(.*?)\B'/g
        this._init()
    }
    _init(){
        this.handleEvents()
    }
    replaceStr(value){
        let str = value.replace(this.regexp, '"$1"')
        text.innerText = str
    }
    handleEvents(){
        document.querySelector('.btn-rep').addEventListener('click', () => {
            this.replaceStr(text.innerText)
        })
    }
}

let newText = new ReplaceStr();