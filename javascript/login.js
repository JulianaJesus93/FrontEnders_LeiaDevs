const login = () => {
  let user_campo = document.getElementById("nome_padrao");
  let senha_campo = document.getElementById("senha_padrao");
  let aviso = document.getElementById("aviso");

  // Verifica login e senha, tambem verifica se o usuario nao tentou muitas  vezes
  if (tentativas <= 3) {
    if (user_campo.value != user_padrao || senha_campo.value != senha_padrao) {
      tentativas++;
      aviso.innerHTML = "Email ou senha incorretos";
      aviso.style.color = 'red'
    } else {
      // Loga caso os dados estejam corretos
      localStorage.setItem("login", "true");
      location.href = "../index.html";
      // por enquanto, quando logar, a gente volta pro index
    }
  } else {
    aviso.innerHTML = "numero maximo de tentativas alcançado";
  }
};


let btn = document.getElementById('acessar')
// User temporario
let user_padrao = "EMAILTESTE@GMAIL.COM";
// Senha temporaria
let senha_padrao = "SENHAPADRÃO";
let tentativas = 0;
let Campos_todos = document.querySelectorAll('input')

btn.addEventListener('click', function Verifica_campos() {
  for (let i = 0; i < Campos_todos.length; i++) {
       if (Campos_todos[i].value == "") {
            Campos_todos[i].classList.add('NãoPreenchido')
            Campos_todos[i].classList.remove('Preenchido')
        } else {
            Campos_todos[i].classList.add('Preenchido')
        }
  }
})