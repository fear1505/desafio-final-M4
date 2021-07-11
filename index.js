function AddServiceCard(params = {}) {
  const templateService = document.querySelector("#template-servicios");
  const containerService = document.querySelector(".servicios__content-card");

  templateService.content.querySelector(
    ".servicios__contenedor__h3"
  ).textContent = params.title;

  templateService.content.querySelector(".servicios__contenedor__img").src =
    params.imagen;

  templateService.content.querySelector(
    ".servicios__contenedor__parrafo"
  ).textContent = params.descripcion;

  const clone = document.importNode(templateService.content, true);
  containerService.appendChild(clone);
}

function getService() {
  return fetch(
    "https://cdn.contentful.com/spaces/u34kr2gv07qc/environments/master/entries?access_token=bI4pE6M72gbqmK3-bi_AsSqsRfiuoeNkKKxf2F3BXt8&content_type=desafoFinalM4"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const fieldsColletion = data.items.map((item) => {
        return {
          title: item.fields.titulo,
          descripcion: item.fields.parrafoServicios,
          imagen: item.fields.imgServicios.sys.id,
          includes: data.includes.Asset,
        };
      });
      fieldsColletion.forEach((element) => {
        const idImg = buscarAsset(element.imagen, element.includes);
        element.imagen = "https:" + idImg.fields.file.url;
      });
      return fieldsColletion;
    });
}

function buscarAsset(assetId, includes) {
  return includes.find((i) => {
    return i.sys.id == assetId;
  });
}

function main() {
  footerComponent(document.querySelector(".footer-content"));
  formComponet(document.querySelector(".form-content"));
  headerComponent(document.querySelector(".header-content"));
  getService().then((service) => {
    for (const s of service) {
      AddServiceCard(s);
    }
  });
}

main();
