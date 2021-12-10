import mediasFactory from "./mediasFactory.mjs";
import filterPhotographerById from "./filterPhotographers.mjs";
import photographersData from "./photographers.mjs";

/** 
     * Cette fonction qui créée la lightbox
     * @param {array} medias
     * @param {object} media
     * @return {html} 

    */

// Elements du DOM lightbox
const lighboxBg = document.querySelector('.lightbox_bg');

const lightboxmedias = document.querySelectorAll(".gallery_element_picture");

const lighboxContent = document.querySelector('.lightbox_container_media');

const lightboxClose = document.querySelector('.lightbox_close');

const {infos, medias} = filterPhotographerById();

 // Ouvrire la lightbox
function openLightbox() {
    // lighboxBg.classList.add('active') ;
    lighboxBg.style.display = 'block';
    }
    // Férmer la lightbox
function closeLightbox() {
     lighboxBg.style.display = 'none';
        }; 


//******************************EVENTS******************************* */  

// Ouvrir la modale lightbox  

let actualMediaId = photographersData.media.id;
lightboxmedias.forEach(function(media) {
    
    media.addEventListener("click", () => {
        // let actualIndex = medias[0].id + medias[0].alt;
       
        const actualIndex = medias.findIndex((element)=>{
            console.log(element.id);
            return element.id;
            
        });
        // console.log(medias[actualIndex].id);
       openLightbox();
    //    lighboxContent.innerHTML = mediasFactory(actualIndex);
    lighboxContent.innerHTML = mediasFactory(medias[actualIndex]);
    return actualMediaId = medias[actualIndex].id;
        

});
});

//Férmer la lightbox avec le bouton close
lightboxClose.addEventListener("click", () =>{
        closeLightbox();
    });


    // Le media actuel qui est dans la lightbox
 
    //La lightbox est creee
  

  const next = document.querySelector(".lightbox_next");

 const previous = document.querySelector(".lightbox_back");


next.addEventListener("click", ()=>{
  
      // Premierement il faut determinet l'index du media actuel dans la lightbox
  
      const actualIndex = medias.findIndex((element)=>{
        
          return element.id === actualMediaId;
        
      });
  
      if(actualIndex !== medias.length){
        
          lighboxContent.innerHTML = mediasFactory(medias[actualIndex + 1]);
           return actualMediaId = medias[actualIndex + 1].id;
           
        
      }
  
});


previous.addEventListener("click", ()=>{
  
      const actualIndex = medias.findIndex((element)=>{
        
          return element.id === actualMediaId;
        
      });
  
     if(actualIndex !== 0){
       
        lighboxContent.innerHTML = mediasFactory(medias[actualIndex - 1]);
        
           return actualMediaId = medias[actualIndex - 1].id;
        
       
     }
  
});



