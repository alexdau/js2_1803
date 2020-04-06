class Validator {
    constructor (form) {
        this.patterns = {
            name: /^[a-zа-яё]+$/i,
            phone: /^\+7\(\d{3}\)\d{3}-\d{4}$/,
            email: /^[\w._-]+@\w+\.[a-z]{2,4}$/
        }

        this.errors = {
            name: "Имя содержит только буквы",
            phone: "Шаблон телефона +7(000)000-0000",
            email: "Шаблон e-mail mymail@mail.ru, my.mail@mail.ru, my-mail@mail.ru"
        }

        this.errorClass = "error-msg"
        this.valid = false
        this._validateForm ()
    }

    _validateForm() {
        let form = document.querySelector("#myform")
        let errors = [...form.querySelectorAll(`.${this.errorClass}`)]

        errors.forEach(e => {
            e.remove()
        })

        let formFields = [...form.querySelectorAll("input")]
        formFields.forEach(field => {
            this._validateField(field)
        })

        if(![...form.querySelectorAll(".invalid")].length) {
            this.valid = true
        }
    }

    _validateField(field) {
        if(this.patterns[field.name]) {
            if(!this.patterns[field.name].test(field.value)) {
                field.classList.add("invalid")
                this._addError(field)
                this._watch(field)
            }
        }
    }

    _addError(field) {
        let err = `<div class="${this.errorClass}">${this.errors[field.name]}</div>`
        field.parentNode.insertAdjacentHTML("beforeend", err)
    }

    _watch(field) {
        field.addEventListener("input", () => {
            let err = field.parentNode.querySelector(`.${this.errorClass}`)
            if(this.patterns[field.name]) {
                if(this.patterns[field.name].test(field.value)) {
                    field.classList.remove("invalid")
                    field.classList.add("valid")
                    if(err) err.remove()
                } else {
                    field.classList.remove("valid")
                    field.classList.add("invalid")
                    if(!err) this._addError(field)
                }
            }
        })
    }
}