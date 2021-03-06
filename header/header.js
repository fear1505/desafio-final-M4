function headerComponent(el) {
  const headerEl = document.createElement("div");
  headerEl.innerHTML = ` <header class="header">
  <img class="header__logo" src="./img-m4/logo-felix.png" alt="">
  <div class="header__menu-hamburg">
      <div class="header__menu-hamburg__linea"></div>
      <div class="header__menu-hamburg__linea"></div>
      <div class="header__menu-hamburg__linea"></div>
  </div>
  <div class="header__menu-hamburg-ventana">
  <img class="header__menu-hamburg-ventana__x" src="./img-m4/x-ventana.png" alt="">
  <div class="header__menu-hamburg-ventana__contenido">
    <a class="header__menu-hamburg-ventana__contenido__psc" href="./porfolio.html">Portafolio</a>
    <a class="header__menu-hamburg-ventana__contenido__psc" href="./servicios.html">Servicios</a>
    <a class="header__menu-hamburg-ventana__contenido__psc" href="./contacto.html">Contacto</a>
  </div>
  </div>
  <div class="header__desktop">
      <a class="header__desktop_menu" href="./porfolio.html">Portafolio</a>
      <a class="header__desktop_menu" href="./servicios.html">Servicios</a>
      <a class="header__desktop_menu" href="./contacto.html">Contacto</a>
  </div>
</header>`;
  el.appendChild(headerEl);
  const abreVentanaEl = document.querySelector(".header__menu-hamburg");
  const cerrarVentanael = document.querySelector(
    ".header__menu-hamburg-ventana__x"
  );
  const ventanaEl = document.querySelector(".header__menu-hamburg-ventana");

  abreVentanaEl.addEventListener("click", () => {
    ventanaEl.style.display = "inherit";
  });

  cerrarVentanael.addEventListener("click", () => {
    ventanaEl.style.display = "";
  });
}
