const navBar = document.querySelector("nav");
navBar.innerHTML = `
      <a href="index.html"><img id="logo" src="./imagens/FrontEnders.png"></a>
        <div id="navegacao">
          <ul id="links">
              <li><a class="link" href="index.html">Home</a></li>
              <li><a class="link" href="leiadevs.html">LeiaDevs</a></li>
              <li><a class="link" href="faleConosco.html">Fale Conosco</a></li>
          </ul>
          <a id="btn_entrar" href="login.html">Entrar</a>
          </div>
        `;

const rodape = document.querySelector("footer");
rodape.innerHTML = `
      <div id="logoPrincipal"><img src="./imagens/FrontEnders.png"></div>
        <div id="flexFooter">
          <div><a href="https://www.instagram.com/"><img id="logoFooter" src="./imagens/instagram.png"></a></div>
          <div><a href="https://www.facebook.com/"><img id="logoFooter" src="./imagens/facebook.png"></a></div>
          <div><a href="https://www.whatsapp.com/"><img id="logoFooter" src="./imagens/whatsapp.png"></a></div>
        </div>
        <div id="textFooter">
          <p>Copyright ℗ 2022 FrontEnders</p>
      </div>
      `;
