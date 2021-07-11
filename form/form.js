function formComponet(el) {
  const formEl = document.createElement("div");
  formEl.innerHTML = `
  <div class="content-form-title">
      <div class="form__content-titulo">
          <h1 class="form__content-titulo__h1">Escribime</h1>
      </div>
      <form class="form__contenedor">
          <label class="form__contenedor__label">
              <span class="form__contenedor__label__nombre">NOMBRE</span>
              <input class="form__contenedor__label__input" name="nombre" type="text">
          </label>
          <label class="form__contenedor__label">
           <span class="form__contenedor__label__mail">EMAIL</span>
           <input class="form__contenedor__label__input" name="email" type="text">
       </label>
       <label class="form__contenedor__label">
           <span class="form__contenedor__label__mensaje">Mensaje</span>
           <textarea class="form__contenedor__label__area" name="mensaje" id="" cols="30" rows="10"></textarea>
       </label>
       <div class="form__button">
          <button class="form__button__boton">Enviar</button>
          </div>
     </form>
  </div>`;
  el.appendChild(formEl);
  enviarForm(formEl);
}

function enviarForm() {
  const myForm = document.querySelector(".form__contenedor");
  myForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const objeto = Object.fromEntries(formData.entries());

    let mensaje = `${objeto.nombre} te ha enviado un mensaje! <br/>
    Mensaje: ${objeto.mensaje} <br/>
    Mail de ${objeto.nombre}: ${objeto.email}`;

    fetch("https://apx-api.vercel.app/api/utils/dwf", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        to: "rodilfelix16@gmail.com",
        message: mensaje,
      }),
    })
      .then(() => {
        alert("El mensaje se envio con exito");

        const inputsEl = document.querySelector(
          ".form__contenedor__label__input"
        );
        inputsEl.forEach((input) => {
          input.value = "";
        });
        const textareaEl = formEl.querySelector(
          ".form__contenedor__label__area"
        );
        textareaEl.value = "";
      })
      .catch(() => {
        alert("Error al enviar el mensaje");
      });
  });
}
