import photographersData from "./photographers.mjs";


// on filtre les photographes avec les tags

export default function filterTags(tag){

      return photographersData?.photographers.filter((photographer)=>{

           if(photographer.tags.includes(tag) === true){

                return photographer;

           }

      });

};





