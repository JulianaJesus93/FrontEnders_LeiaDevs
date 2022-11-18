const eNumero = (numero) => /^[0-9]+$/.test(numero);
const cepValido = (cep) => cep.length == 8 && eNumero(cep);

const LimparForm = () => {
  document.getElementById("rua").value = "";
  document.getElementById("complemento").value = "";
  document.getElementById("bairro").value = "";
  document.getElementById("cidade").value = "";
  document.getElementById("estado").value = "";
};

const PreencherForm = (endereco) => {
  document.querySelector("#rua").value = endereco.logradouro;
  document.querySelector("#complemento").value = endereco.complemento;
  document.querySelector("#bairro").value = endereco.bairro;
  document.querySelector("#cidade").value = endereco.localidade;
  document.querySelector("#estado").value = endereco.uf;
};

const PesquisarCEP = async () => {
  LimparForm();
  const cep = document.getElementById("cep").value;
  const url = `https://viacep.com.br/ws/${cep}/json/`;

  if (cepValido(cep)) {
    const dados = await fetch(url);
    const endereco = await dados.json();
    PreencherForm(endereco);
  }
};

let cep = document
  .getElementById("cep")
  .addEventListener("focusout", PesquisarCEP);


//DOM CADASTRO
//passos
var conta = document.querySelector("#dados_conta");
var pessoais = document.querySelector("#dados_pessoais");
var localizacao = document.querySelector("#dados_localização");
//botoes
var anterior = document.querySelector("#anterior");
var proximo = document.getElementById("proximo");
var finalizar = document.querySelector("#finalizar");
// var de teste
var controlador = 1;

const next = () => {
  conta.style.display = "none";
  anterior.style.display = "block";

  if (conta.style.display == "none") {
    pessoais.style.display = "block";
  }

  controlador++;

  if (controlador >= 3) {
    pessoais.style.display = "none";
    if (pessoais.style.display == "none" && conta.style.display == "none") {
      localizacao.style.display = "block";
      proximo.style.display = "none";
      Verificador()
      controlador = 0;
    }
  }
};

// Evento adicionado ao botão
proximo.addEventListener("click", next);

function previous() {
  if (pessoais.style.display == "block") {
    pessoais.style.display = "none";
    conta.style.display = "block";
    anterior.style.display = "none";
    finalizar.style.display = "none";
    proximo.style.display = "block";
  }

  if (conta.style.display == "none" && localizacao.style.display == "block") {
    localizacao.style.display = "none";
    pessoais.style.display = "block";
    finalizar.style.display = "none";
    proximo.style.display = "block";
  }
}

//Finalização de cadastro
var cadastro = document.getElementById("allCadastro")
var finalizado = document.getElementById("finalizado")

function finish() {
  var nomeUsuario = document.getElementById("nome_completo").value

  Verificador()

  cadastro.style.display = "none";
  finalizado.style.display = "block";
  finalizado.innerHTML = `
    <p class="paragrafoCadastro">Obrigada pelo seu cadastro, ${nomeUsuario}!<br><br>
    Você agora faz parte do time FrontEnders!
    </p>
    `

}

function Verificador() {
  let Todos_os_CAMPOS = document.querySelectorAll('input')
  for (let i = 0; i < Todos_os_CAMPOS.length; i++) {
    if (Todos_os_CAMPOS[i].value == "") {
      finalizar.style.display = 'none'
    } else {
      finalizar.style.display = 'block'
    }
  }
  let Select = document.querySelector('select').value
}