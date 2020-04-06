//task1
function regexpTask1(text) {
    return text.replace( /\'/g, '\"')
}

//task2
function regexpTask2(text) {
    const regexp  = /(?<=\S)\'(?!\S)|(?<!\S)\'(?=\S)/g
    return text.replace(regexp, '\"')
}

//task3
function validationField(field) {
    var validate = false
    var regexp = ""

    switch (field.getAttribute('name')) {

        case "name":
            regexp  = /[^a-zа-я]|^\s*$/gi
            validate = !regexp.test(field.value)
            break

        case "phone":
            regexp  = /\+7\(\d{3}\)\d{3}-\d{4}/gi
            validate = regexp.test(field.value)
            break

        case "email":
            regexp  = /^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/
            validate = regexp.test(field.value)
            break

        case "textarea":
            validate = field.value
            break

        default:
            return true
    }

    if (validate) {
        field.classList.remove('is-invalid')
        field.nextElementSibling.classList.add('d-none')
    } else {
        field.classList.add('is-invalid')
        field.nextElementSibling.classList.remove('d-none')
    }
}


export default function app() {

    //task1
    var text1 = document.querySelector("#task1").innerHTML
    document.querySelector("#task1-result").innerHTML = regexpTask1(text1)

    //task2
    var text2 = document.querySelector("#task2").innerHTML
    document.querySelector("#task2-result").innerHTML = regexpTask2(text2)

    //task3
    var form = document.forms["task3"]
    form.addEventListener("submit",function(e) {
        e.preventDefault();

        [].forEach.call(form.elements, item => validationField(item))

    });
}