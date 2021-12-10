import filterPhotographerById from "./filterPhotographers.mjs";
import mediasFactory from "./mediasFactory.mjs";


const {medias, infos} = filterPhotographerById();
const trier = document.querySelector(".sorting");
const items = document.querySelectorAll('.gallery_element');

//fonctionnalité filtre (evenemenet)
trier.addEventListener("change", (e) =>{
    // filterMedia(e.target.value);
    filterMedia(medias);
    // console.log(filterMedia(medias));
 });
//fonction qui filtre les sorting 
function filterMedia(filter) {
  console.log(medias.sort(compareLike));
    if(filter == "popularity"){medias.sort(compareLike);}
    if(filter == "date"){medias.sort(compareDate);}
    if(filter == "title"){medias.sort(compareTitle);}
    
}
function compareTitle(a, b) {
  
        if (a._alt < b._alt){
            return -1;
          }
          if (a._alt > b._alt ){
            return 1;
          }
          console.log(a.alt, b.alt);
          return 0;  
}
function compareLike(a, b) {
  
    if (a._likes > b._likes ){
        return -1;
      }
      if (a._likes < b._likes ){
        return 1;
      }
      console.log(a.likes, b.likes);
      return 0; 

}
function compareDate(a, b) {

    if (a._date < b._date ){
        return -1;
      }
      if (a._date > b._date ){
        return 1;
      }
      console.log(a.date,b.date);
      return 0;  
}


