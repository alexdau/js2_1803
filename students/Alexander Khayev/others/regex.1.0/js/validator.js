class Validator {
  constructor(obj = {}) {
    let {name, phone, email} = obj;
    this.errors = [];
    this.Validate(
      "name",
      name.value.replace(/[\wА-Яа-я]+/ig, "").length === 0 || name.value.length === 0,
      'Имя должно содержать только буквы');
    this.Validate(
      "phone",
      null !== phone.value.match(/^\+\d\(\d{3}\)\d{3}-\d{4}$/ig) || phone.value.length === 0,
      'Необходимый формат: +7(777)777-7777');
    this.Validate(
      "email",
      null !== email.value.match(/^[\w\.\-]+@[\w\.-]+\.\w+$/ig) || email.value.length === 0,
      'Неверный формат e-mail'
    );
  }

  Validate(field, func, msg) {
    if (!func) {
      this.errors.push({name: field, msg: msg});
      // не делаем проверку на пустое поле
    }
  }
}
