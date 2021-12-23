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
        <img class="gallery_element_picture" src=../medias/${image} type="image/jpg" alt="${alt}" /> 
      `;
 
 }
 
 function createVideo(video, alt){
 
       return `
       
<<<<<<< HEAD
          <video class= "gallery_element_video">
              
               <source src=../medias/${video} type="video/mp4" alt=${alt}>
=======
          <video class= "gallery_element_picture">
              
               <source src= ../images/medias/${video} type="video/mp4" alt=${alt}>
>>>>>>> d19e098a21c8d2055f918bc6e9e510c504296121
          
          </video>
        `;
 
 }