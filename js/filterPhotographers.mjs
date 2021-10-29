import photographersData from "./photographers.mjs";

export default function filterPhotographerById(){
    const queryString = window.location.search;
    
    const urlParams = new URLSearchParams(queryString);

    const photographerId = urlParams.get("id");

    return photographersData?.media.filter((media)=>{
      
         return Number(media?.photographerId) === Number(photographerId);
     
    });

   

};



