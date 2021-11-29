/** 
   * Cette fonction cree les differents medias a l'aide du pattern factory
   * @param {object} media
   * @return {html}

*/

export default function mediasFactory(media){

    const {image, video, alt} = media;
 
    if(media.hasOwnProperty("image") === true){
    
        return createImage(image, alt);
    
    }
    
    return createVideo(video, alt);
 
 
 }
 
 function createImage(image, alt){
 
      return `
        <img class="gallery_element_picture" src= ../images/medias/${image}  alt="${alt}" /> 
      `;
 
 
 }
 
 function createVideo(video, alt){
 
 
       return `
       
          <video class= "gallery_element_picture" controls>
              
               <source src= ../images/medias/ ${video} type="video/mp4" alt=${alt}>
          
          </video>
        `;
 
 }