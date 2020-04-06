/**
 * Класс "человек"
 */
class Person {
  constructor(obj = {}) {
    let {name, age, gender, hobbies: needs} = obj;
    if (name.length == 0 || age === undefined || gender === undefined) {
      throw new Error("Неправильный какой-то человек");
    }
    this.name = name.value;
    this.age = age.value;
    this.gender = gender.value;
    this.needs = needs === undefined ? []: needs.value;
    this.canBeMother = "data-mother" in gender && gender["data-mother"] == true;
  }
}
