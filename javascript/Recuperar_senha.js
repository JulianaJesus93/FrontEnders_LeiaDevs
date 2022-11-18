let btn = document.querySelector('button')

btn.addEventListener('click', function enviar_Email() {
    let campo_email = document.getElementById('nome_padrao')
    let paragrafo = document.getElementById('aviso')   

    if (campo_email.value == "" || campo_email.value.length < 8) {
        campo_email.classList.remove('Preenchido')
        campo_email.classList.add('NãoPreenchido')
        paragrafo.innerHTML = "Por favor, insira seu email."
        paragrafo.style.color = 'red'
    } else {
        for (let i = 0; i < campo_email.value.length; i++) {
            if (campo_email.value[i] == "@") {
             campo_email.classList.add('Preenchido')
            paragrafo.innerHTML = "Enviamos um link de recuperação de senha."
            paragrafo.style.color = 'green'            
        } 
    }
    }
}) 