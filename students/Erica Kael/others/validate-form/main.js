
// +7(000)000-0000

class ValidateForm {
    constructor(){
        this.validName = /^([a-z]+)$/i
        this.validPhone = /\+7\(\d{3}\)\d{3}-\d{4}/
        this.validMail = /^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/
        this._init()       
    }
    _init(){
        this._handleEvents()
    }
    _validate(form){
        let name = form.querySelector('input[name="user-name"]')
        let phone = form.querySelector('input[name="user-phone"]')
        let mail = form.querySelector('input[name="user-email"]')

        let validName = this._validateInput(this.validName, name)
        let validPhone = this._validateInput(this.validPhone, phone)
        let validMail = this._validateInput(this.validMail, mail)

        if(validName&&validPhone&&validMail){
            document.querySelector('.modal__error').innerText = ''
            form.submit()
        }else{
            document.querySelector('.modal__error').innerText = 'Форма заполнена неверно'
        }
      
        
    }
    _handleEvents(){
        document.querySelector('.modal__form').addEventListener('submit', (e)=>{
            e.preventDefault()
            this._validate(e.target)
        })
    }
    _validateInput(pattern, input){
        let bool = pattern.test(input.value)
        if(!bool){
            input.style.borderColor = 'red'
        }else{
            input.style.borderColor = 'rgb(238, 238, 238)'
        }
        return bool
    }
}

let valid = new ValidateForm()