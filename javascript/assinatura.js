var analisePerfil = document.getElementById("analisePerfil")
var finalizado = document.getElementById("finalizado")
var btn = document.getElementById('acessar')
btn.style.display = 'none'

function assinatura() {
    analisePerfil.style.display = "none";
    finalizado.style.display = "block";
    finalizado.innerHTML = `
        <p class="paragrafoCadastro">Parabéns, você assinou a <br>
            LeiaDevs, sua bibliotech digital!</p>
        <p class="paragrafoCadastro2"> Em breve, você receberá um e-mail com tudo o que você precisa saber 
            para aproveitar ao máximo todo o conteúdo especial que preparamos para você!
        </p>
    `
}

var Ultimo_Select = document.getElementById('ling_aprender2')

Ultimo_Select.addEventListener('change', function UltimoSelectVrfc() {
  var Todos_os_CAMPOS = document.querySelectorAll('select')
  for (let i = 0; i < Todos_os_CAMPOS.length; i++) {
    if (Todos_os_CAMPOS[i].value == "Selecione uma opção") {
      let aviso = document.getElementbyId('aviso')
      aviso.innerHTML += "Avisado" 
      console.log("alou")
      // ^ Textoxinho que eu coloquei de teste
    } else {
      console.log('alo');
      btn.style.display = 'block';
      //aviso.style.display = 'none';
    }
  }
})

//o botão só aparece se estiver tudo preenchido e vc necessariamente clicar no ultimo select. 
//se você preencher tudo, mas o ultimo select selecionado não for literalmente o último, o botão não aparece.
