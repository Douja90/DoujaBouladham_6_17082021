import photographersData from "./photographers.mjs";

export default function filterTags(tag){

      return photographersData?.photographers.filter((photographer)=>{

           if(photographer.tags.includes(tag) === true){

                return photographer;

           }

      });

};





