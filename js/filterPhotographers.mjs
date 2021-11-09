import photographersData from "./photographers.mjs";

export default function filterPhotographerById(){
    const queryString = window.location.search;
    
    const urlParams = new URLSearchParams(queryString);

    const photographerId = urlParams.get("id");

    // On filtre les medias du photographe grace a son Id

    const photographerMedias = photographersData?.media.filter((media)=>{
      
         return Number(media?.photographerId) === Number(photographerId);
     
    });

    // On filtre les informations du photographe grace a son Id

    const photographerInfo = photographersData?.photographers.filter((photographer)=>{

         return Number(photographerId) === Number(photographer?.id);

    });


    return {

          infos:photographerInfo,

          medias:photographerMedias

    }
   

};



