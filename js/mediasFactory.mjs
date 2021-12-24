/** 
   * Cette fonction cree les differents medias a l'aide du pattern factory
   * @param {object} media
   * @return {html}

*/

export default function mediasFactory(media){

    const {image, video, alt, id} = media;
 
    if(media.hasOwnProperty("image") === true){
    
        return createImage(image, alt, id);
    
    }
    
    return createVideo(video, alt, id);
 
 
 }
 
 function createImage(image, alt, id){
 
      return `
        <img class="gallery_element_picture gallery_media" data-id=${id} src=../medias/${image} type="image/jpg" alt="${alt}" /> 
      `;
 
 }
 
 function createVideo(video, alt, id){
 
       return `
       
          <video class= "gallery_element_picture gallery_media" data-id=${id}>
              
               <source src= ../medias/${video} type="video/mp4" alt=${alt}>
          
          </video>
        `;
 
 }