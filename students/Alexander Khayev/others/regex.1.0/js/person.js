/**
 * Класс "человек"
 */
class Person {
  constructor(obj = {}) {
    let {name, phone, email} = obj;
    this.Name = name.value;
    this.Phone = phone.value;
    this.Email = email.value;
  }

}
