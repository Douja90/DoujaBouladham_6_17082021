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
                <div class="gallery_element_picture">
                    ${mediasFactory(media)}
                </div>
                <div class="gallery_element_legend">
                    <h2 class="gallery_element_legend_title">${media.alt}</h2>
                    <div class="gallery_element_legend_likes">
                        <h2 class="gallery_element_legend_likes_number">${media.likes}</h2>
                        <div class="gallery_element_legend_likes_heart">
                            <i class="fas fa-heart"></i>
                        </div>
                    </div>
                </div>
                <div class="gallery_element_date">${media.date}</div>
            </div>  
                
                `;


    });

    return html;

}
