class Validator {
  constructor(form) {
    this.patterns = {
      name: /[a-zа-я]+\s[a-zа-я]+$/i,
      phone: /\+\d\(\d{3}\)\d{3}\-\d{4}$/,
      email: /^[\w._-]+@\w+\.[a-z]{2,4}$/
    };

    this.errors = {
      name: "Jhon Smith или Иванов Иван",
      phone: "Телефон имеет вид +7(000)000-0000",
      email:
        "E-mail имеет вид mymail@mail.ru, или my.mail@mail.ru, или my-mail@mail.ru."
    };

    this.errorClass = "eror-msg";
    this.valid = false;
    this.validateForm();
  }

  validateForm() {
    let form = document.querySelector("#myform");
    let errors = [...form.querySelectorAll(`.${this.errorClass}`)];

    errors.forEach(e => {
      e.remove();
    });

    let formFields = [...form.querySelectorAll("input")];
    formFields.forEach(field => {
      this.validateField(field);
    });

    if (![...form.querySelectorAll(".invalid")].length) {
      this.valid = true;
    }
  }

  validateField(field) {
    if (this.patterns[field.name]) {
      if (!this.patterns[field.name].test(field.value)) {
        field.classList.add("invalid");
        this.addError(field);
        this.watch(field);
      }
    }
  }

  addError(field) {
    let err = `<div class="${this.errorClass}">${
      this.errors[field.name]
    }</div>`;
    field.parentNode.insertAdjacentHTML("beforeend", err);
  }

  watch(field) {
    field.addEventListener("input", () => {
      let err = field.parentNode.querySelector(`.${this.errorClass}`);
      if (this.patterns[field.name]) {
        if (this.patterns[field.name].test(field.value)) {
          field.classList.remove("invalid");
          field.classList.add("valid");
          if (err) err.remove();
        } else {
          field.classList.remove("valid");
          field.classList.add("invalid");
          if (!err) this.addError(field);
        }
      }
    });
  }
}
