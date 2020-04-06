class ControlForm {
    constructor(form){
        this.regExp = {
            'name': /^\p{L}+$/u,
            'phone':/^\+7\(\d{3}\)\d{3}-\d{4}$/,
            'email': /^[\w._-]+@\w+\.[a-z]+$/
        };
        this.form = form;
        this.inputs = this.form.querySelectorAll('.input');
        this.errors = {
            'name': 'Имя должно содержать только буквы!',
            'phone': 'Телефон должен быть в формате: +7(000)000-0000',
            'email': 'E-mail должен быть в формате: mail@mail.ru'
        }
    }

    submitHandler(evt){         
        this.clearError();
        this.inputs.forEach(input =>{
            if(!this.isTrueInput(input)){
                evt.preventDefault();
                this.addError(input);
            }
        })
    }

    /**
     * Убирает все ошибки
     */
    clearError(){
        let errorsMsg = this.form.querySelectorAll('.errorMsg');
        errorsMsg.forEach(error => error.remove());
        let errorsClass = this.form.querySelectorAll('.error');
        errorsClass.forEach(error => error.classList.remove('error'));
    }

    /**
     * Проверяет корректно ли введенное значение
     */
    isTrueInput(input){
        return this.regExp[input.name].test(input.value);
    }

    addError(input){
        let error = `<p class="errorMsg">${this.errors[input.name]}</p>`
        input.insertAdjacentHTML('beforebegin', error)
        input.classList.add('error');
    }
}