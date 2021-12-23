import mediasFactory from "./mediasFactory.mjs";
    /** 
     * Cette fonction qui cree du HTML
     * @param {array} medias
     * @return {html}

    */
    export default function createMediasPageDom(medias){
        
            let html = "";

            medias.forEach((media)=>{

            
                html += `
                
                <div class="gallery_element">
                <div class="gallery_element_picture" aria-label="medias de la page photographers" aria-hidden="true">
                    ${mediasFactory(media)}
                </div>
                <div class="gallery_element_legend" aria-label="Légendes des medias">
                    <h2 class="gallery_element_legend_title" aria-label="Titres des medias">${media.alt}</h2>
                    <div class="gallery_element_legend_likes">
                        <h2 class="gallery_element_legend_likes_number" aria-label="Nombre de likes pour chaque media">${media.likes}</h2>
                        <div class="gallery_element_legend_likes_heart">
                            <i class="fas fa-heart likes__heart"></i>
                        </div>
                    </div>
                </div>
                <div class="gallery_element_date" aria-label="date de chaque media">${media.date}</div>
            </div> 
          
                
                `;


    });

    return html;

}
