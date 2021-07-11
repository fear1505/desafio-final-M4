function addPorfolioCard(params = {}) {
  const templatePorfolio = document.querySelector("#template-porfolio");
  const containerPorfolio = document.querySelector(".porfolio__content-card");

  templatePorfolio.content.querySelector(
    ".porfolio__contenedor__h3"
  ).textContent = params.title;

  templatePorfolio.content.querySelector(".porfolio__contenedor__img").src =
    params.imagen;

  templatePorfolio.content.querySelector(
    ".porfolio__contenedor__parrafo"
  ).textContent = params.descripcion;

  templatePorfolio.content.querySelector(".porfolio__contenedor__url").href =
    params.url;

  const clone = document.importNode(templatePorfolio.content, true);
  containerPorfolio.appendChild(clone);
}

function getPorfolio() {
  return fetch(
    " https://cdn.contentful.com/spaces/u34kr2gv07qc/environments/master/entries?access_token=bI4pE6M72gbqmK3-bi_AsSqsRfiuoeNkKKxf2F3BXt8&content_type=desafoFinalM4Porfolio"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      const fieldsColletion = data.items.map((item) => {
        return {
          title: item.fields.tituloPortafolio,
          descripcion: item.fields.parrafoPorfolio,
          url: item.fields.url,
          imagen: item.fields.imgPorfolio.sys.id,
          includes: data.includes.Asset,
        };
      });
      fieldsColletion.forEach((element) => {
        const imgId = buscarAssetP(element.imagen, element.includes);
        element.imagen = "https:" + imgId.fields.file.url;
      });
      return fieldsColletion;
    });
}

function buscarAssetP(assetId, includes) {
  return includes.find((i) => {
    return i.sys.id == assetId;
  });
}

function main() {
  footerComponent(document.querySelector(".footer-content"));
  headerComponent(document.querySelector(".header-content"));
  getPorfolio().then((porfolio) => {
    for (const p of porfolio) {
      addPorfolioCard(p);
    }
  });
}

main();
