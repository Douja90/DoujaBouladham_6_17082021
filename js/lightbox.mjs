import mediasFactory from "./mediasFactory.mjs";
/** 
     * Cette fonction qui créée la lightbox
     * @param {array} medias
     * @param {string} idMedia
     * @return {html} 

    */
export default function lightbox(mediasList, idMedia){ 
   
     // On a besoin de recuperer les informations du media qui a ete envoye a la lightbox

     const currentMediaIndex = mediasList.findIndex((media)=>{

          return Number(media.id) === Number(idMedia);

     });

     const currentMedia = mediasList[currentMediaIndex];

     
     
}