import filterPhotographerById from "./filterPhotographers.mjs";
import createPhotographerPageDom from "./createPhotographersPageNode.mjs";
import createMediasPageDom from "./createMediasNode.mjs";
import photogaphersData from "./photographers.mjs";


// 'Destructuring assignment' pour les deux constantes infos et medias (filtrer selon l'id)
const {infos, medias} = filterPhotographerById();

// Elements du DOM
const photographersPageDomNode = document.querySelector(".presentation");

const mediasPageDomNode = document.querySelector("#gallery");

const lighboxContent = document.querySelector('.lightbox_content');


// Créer les infrmations de chaque photographe aprés le tri 
photographersPageDomNode.innerHTML = createPhotographerPageDom(infos);

// Créer les medias de chaque photographe aprée le tri
mediasPageDomNode.innerHTML = createMediasPageDom(medias);


// Nom du photographe dans la modale
const textContact = document.querySelector('.contact_text_photographer');

function createInfoModal(name){
    let infoModalHTML =  `<p class="contact_text_photographer">${name}</p>`;

    return infoModalHTML;
   
}

textContact.innerHTML = createInfoModal(infos[0].name);       





 








   
 


