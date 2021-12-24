import filterPhotographerById from "./filterPhotographers.mjs";
import createPhotographerPageDom from "./createPhotographersPageNode.mjs";
import createMediasPageDom from "./createMediasNode.mjs";
import lightbox from "./lightbox.mjs";
import likes from "./likes.mjs";
import modal from "./modal.mjs"

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

const galleryElements = document.querySelectorAll(".gallery_media");

galleryElements.forEach((galleryElement)=>{

    galleryElement.addEventListener("click", ()=>{

           const mediaId = galleryElement.dataset.id;  
           
          lightbox(medias, mediaId);

    });

});

likes();
modal();





 








   
 


