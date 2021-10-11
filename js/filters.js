import photographersData from "./photographers.mjs";

export default function filterTags(tag){

      return photographersData?.photographers.filter((photographer)=>{

           if(photographer.tags.includes(tag) === true){

                return photographer;

           }

      });

};


// document.querySelector("#bloc-page").addEventListener("click", (event)=>{
    
//     if(event.target !== event.currentTarget){
          
//            const filterID = event.target?.dataset?.tags; 
    
//            const resultFilter = photographersData.filter((element)=>{

//                  if(element.tags.includes(filterID) === true){

//                        return element;

//                  }

//            });
      
//            console.log(resultFilter);
      
//     }

// });