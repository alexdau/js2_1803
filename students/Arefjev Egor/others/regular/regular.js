'use strict';


function change(text) {
    return text.replace( /\'/g, '\"')
}

let a = document.querySelector('.text').innerHTML;
 document.querySelector('.word').innerHTML = change(a);
