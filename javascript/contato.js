let nome = document.getElementById('nome')
let sobrenome = document.getElementById('sobrenome')
let email = document.getElementById('email')
let menssagem = document.getElementById('menssagem')
let botao = document.getElementById('btn')

botao.addEventListener("click", function verficador() {
    let campos = document.querySelectorAll('input')
    let textarea = document.querySelector('textarea')
    for (let c = 0; c < campos.length; c++) {
        if (campos[c].value == "") {
            campos[c].classList.add('NãoPreenchido')
            campos[c].classList.remove('Preenchido')
        } else {
            campos[c].classList.add('Preenchido')
        }
    }

    if (textarea.value == "") {
        textarea.classList.add('NãoPreenchido')
        textarea.classList.remove('Preenchido')
    } else {
        textarea.classList.add('Preenchido')
    }

    if (campos.value !== "" && textarea.value !== "") {
        alert("Obrigada pelo seu contato. Retornaremos em breve!")
    }
});