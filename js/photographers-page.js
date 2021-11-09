import filterPhotographerById from "./filterPhotographers.mjs";
import createPhotographerPageDom from "./createPhotographersPageNode.mjs";
import createMediasPageDom from "./createMediasNode.mjs";
import modal from "./modal.mjs"
import applyPictureAndTitleToLightbox from "./lightBox.mjs"

const {infos, medias} = filterPhotographerById();

const photographersPageDomNode = document.querySelector(".presentation");

const mediasPageDomNode = document.querySelector("#gallery");

photographersPageDomNode.innerHTML = createPhotographerPageDom(infos);

mediasPageDomNode.innerHTML = createMediasPageDom(medias);

modal() ;







 




















